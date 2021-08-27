import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/storage.service.js";

export const MailService = {
    query,
    setStarred,
    addMail,
    getMailById,
    setRead,
    deleteMail,
    addAsDraft,
}
const gMails = storageService.loadFromStorage('mailsDB') || {};



function query(category, filter) {
    if (!gMails.mails) {
        _createGMails();
    }
    const user = gMails.user
    let mails = filter ? gMails.mails.filter(mail => {
        return (mail.subject.toLowerCase().includes(filter.text.toLowerCase())
            || mail.body.toLowerCase().includes(filter.text.toLowerCase())
            || (mail.to ? mail.to.toLowerCase().includes(filter.text.toLowerCase()) :
                (mail.from.name.toLowerCase().includes(filter.text.toLowerCase())
                    || mail.from.adress.toLowerCase().includes(filter.text.toLowerCase()))))
    })
        .filter(mail => {
            if (filter.isRead === null) return true;
            else {
                return mail.isRead === filter.isRead
            }
        }) : gMails.mails
    if (category !== 'isDraft') {
       mails= mails.filter(mail => !mail.isDraft)
    }
    if (category) {
        const mailsToShow = mails.filter(mail => {
            return mail[category]
        })
        return Promise.resolve({ mails: mailsToShow, user })
    }
    return Promise.resolve({ mails, user })
}

function addMail(email) {
    let currMail = email;
    currMail.sentAt = getSentAt(email.sentAt);
    currMail.id = utilService.makeId()
    currMail.isRead = false
    currMail.isStarred = false
    currMail.isSent = true
    currMail.isRead = false
    currMail.isDraft = false
    gMails.mails.unshift(email)
    _saveToStorage()
    return Promise.resolve();
}

function addAsDraft(email, id = null) {
    let currMail = email;
    currMail.sentAt = '';
    currMail.id = id ? id : utilService.makeId()
    currMail.isDraft = true
    if (!id) {
        gMails.mails.unshift(email)
    }
    else {
        const idx = gMails.mails.findIndex((mail) => id === mail.id)
        gMails.mails[idx] = email;
    }
    _saveToStorage()
    return Promise.resolve(email.id)
}

function setRead(id) {
    const idx = gMails.mails.findIndex(mail => mail.id === id)
    gMails.mails[idx].isRead = true;
    _saveToStorage()
    return Promise.resolve();
}

function setStarred(id) {
    const idx = gMails.mails.findIndex(mail => mail.id === id)
    gMails.mails[idx].isStarred = !gMails.mails[idx].isStarred;
    _saveToStorage()
    return Promise.resolve();
}

function deleteMail(id) {
    const idx = gMails.mails.findIndex(mail => mail.id === id);
    gMails.mails.splice(idx, 1)
    return Promise.resolve();
}

function getMailById(id) {
    return gMails.mails.find(mail => mail.id === id);
}

function getSentAt(date) {
    const sentAt = {
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}`,
    }
    return sentAt;
}


function _createGMails() {
    gMails.user = {
        email: 'user@appsus.com',
        fullName: 'Mahatma Appsus'
    }
    gMails.mails = []
    let email = {
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        sentAt: new Date,
        to: 'momo@momo.com',
    }

    for (var i = 0; i < 5; i++) {
        addMail({ ...email });
        var id = utilService.makeId();
        gMails.mails.push({
            id,
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: getSentAt(new Date),
            from: {
                name: Math.random() > 0.5 ? 'Mr Popo' : 'Ms Banana',
                adress: 'mail@mail.com'
            },
            isRead: false,
            isStarred: false,
            isSent: false,
        })
    }
    _saveToStorage()
}

function _saveToStorage() {
    storageService.saveToStorage('mailsDB', gMails)
}
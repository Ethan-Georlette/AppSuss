import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/storage.service.js";

export const MailService = {
    query,
    setStarred,
}
const gMails = storageService.loadFromStorage('mailsDB') || {};



function query(category) {
    if (!gMails.mails) {
        _createGMails();
    }
    const user=gMails.user
    if(category){
        const mailsToShow=gMails.mails.filter(mail=>{
            return mail[category];
        })
        return Promise.resolve({mails:mailsToShow,user})
    }
    return Promise.resolve({mails:gMails.mails,user})
}

function addMail(email) {
    let currMail=email;
    currMail.id = utilService.makeId()
    currMail.isRead= false
    currMail.isStarred= false
    currMail.isSent= true
    gMails.mails.unshift(email)
}

function setStarred(id){
    const idx=gMails.mails.findIndex(mail=>mail.id===id)
    gMails.mails[idx].isStarred=!gMails.mails[idx].isStarred;
    return Promise.resolve();
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
        isRead: false,
        sentAt: getSentAt(new Date),
        to: 'momo@momo.com',
    }

    for (var i = 0; i < 5; i++) {
        addMail({...email});
        var id=utilService.makeId();
        gMails.mails.push({
            id,
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: getSentAt(new Date),
            from: Math.random() > 0.5 ? 'Mr Popo' : 'Ms Banana',
            isRead: false,
            isStarred: false,
            isSent: false,
        })
    }
}
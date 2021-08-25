import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/storage.service.js";

export const MailService = {
    query,
}
const gMails = storageService.loadFromStorage('mailsDB') || {};



function query() {
    if (gMails) {
        _createGMails();
    }
    return Promise.resolve(gMails)
}
function addMail(email) {
    email.id = utilService.makeId()
    gMails.mails.unshift(email)
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
    const email = {
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: getSentAt(new Date),
        to: 'momo@momo.com'
    }
    for (var i = 0; i < 5; i++) {
        addMail(email);
        gMails.mails.push({
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: getSentAt(new Date),
            from: Math.random()>0.5?'Mr Popo':'Ms Banana'
        })
    }
}
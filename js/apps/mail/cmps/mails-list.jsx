import { MailPreview } from "./mail-preview.jsx";
export function MailsList({ mails, onSetStarred, onDeleteMail, onDraftClick}) {
  return (
    <div className="mails-list">
      {!mails.length&&<h2>No Mails to show...</h2>}
      {mails.map((mail) => <MailPreview onDraftClick={onDraftClick} key={mail.id} mail={mail} onDeleteMail={onDeleteMail} onSetStarred={onSetStarred} />)}
    </div>
  );
}
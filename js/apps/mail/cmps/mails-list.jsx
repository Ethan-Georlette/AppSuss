import { MailPreview } from "./mail-preview.jsx";
export function MailsList({ mails, onSetStarred, onDeleteMail }) {
  return (
    <div className="mails-list">
      {!mails.length&&<h1>No Mails to show...</h1>}
      {mails.map((mail) => <MailPreview key={mail.id} mail={mail} onDeleteMail={onDeleteMail} onSetStarred={onSetStarred} />)}
    </div>
  );
}
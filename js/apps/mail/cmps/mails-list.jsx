import { MailPreview } from "./mail-preview.jsx";

export function MailsList({ mails, onSetStarred }) {
  return (
    <div className="mails-list">
      {mails.map((mail) => <MailPreview key={mail.id} mail={mail} onSetStarred={onSetStarred} />)}
    </div>
  );
}
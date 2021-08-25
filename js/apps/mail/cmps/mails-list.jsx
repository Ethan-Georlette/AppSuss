import { MailPreview } from "./mail-preview.jsx";

export function MailsList({ mails }) {
  return (
    <div className="mails-list">
      {mails.map((mail) => <MailPreview key={mail.id} mail={mail} />)}
    </div>
  );
}
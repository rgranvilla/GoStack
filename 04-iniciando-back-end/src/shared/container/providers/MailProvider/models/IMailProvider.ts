import { de } from "date-fns/locale";

export default interface IMailProvider {
  sendMail(to: string, body: string): Promise<void>;
}

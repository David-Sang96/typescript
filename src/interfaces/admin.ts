import { Editor } from "./editor";
import { User } from "./user";

export interface Admin extends User, Editor {
  addUser(): string;
}

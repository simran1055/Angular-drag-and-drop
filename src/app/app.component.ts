import { Component, ViewChild } from "@angular/core";
import { EmailEditorComponent } from "angular-email-editor";
import * as sample from "./sample.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "basic";

  @ViewChild(EmailEditorComponent, null)
  private emailEditor: EmailEditorComponent;

  editorLoaded() {
    //const json; /* DESIGN JSON GOES HERE */
    this.emailEditor.loadDesign(sample);
  }
}

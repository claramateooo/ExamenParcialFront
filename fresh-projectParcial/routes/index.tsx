import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <html>
      <head>
        <title>Parcial</title>
        <meta charset="utf-8"></meta>
      </head>
      <body>
        <div class="layout">
          <div class="header">
            <a href="/agendacsr">Agenda Client Side</a>
            <a href="/agendassr">Agenda Server Side</a>
          </div>
          <h1>My Agenda</h1>
          <div>
            <p>Welcome to my agenda!</p>
          </div>
        </div>
      </body>
    </html>
  );
}

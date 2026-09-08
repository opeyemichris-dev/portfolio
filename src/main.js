import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap Icons only — the rest of the visual design is hand-built
// (no Bootstrap CSS/JS) so the layout, type, and color system are fully custom.
import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css";

createApp(App).mount("#app");

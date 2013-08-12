var nodeapp = require("fh-nodeapp");
ENV_TEST = false;
nodeapp.HostApp.init();
nodeapp.HostApp.serveApp(require("main.js"));

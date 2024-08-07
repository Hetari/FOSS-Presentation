import "/resources/js/bootstrap.js";
import "/resources/css/app.css?t=1722513229629";
import { createApp, h } from "/node_modules/.vite/deps/vue.js?v=a0d060ca";
import __vite__cjsImport3__inertiajs_inertiaVue3 from "/node_modules/.vite/deps/@inertiajs_inertia-vue3.js?v=a0d060ca"; const createInertiaApp = __vite__cjsImport3__inertiajs_inertiaVue3["createInertiaApp"]; const InertiaLink = __vite__cjsImport3__inertiajs_inertiaVue3["InertiaLink"];
import __vite__cjsImport4__inertiajs_progress from "/node_modules/.vite/deps/@inertiajs_progress.js?v=a0d060ca"; const InertiaProgress = __vite__cjsImport4__inertiajs_progress["InertiaProgress"];
import { store } from "/resources/js/store.js";
import { autoAnimatePlugin } from "/node_modules/.vite/deps/@formkit_auto-animate_vue.js?v=a0d060ca";
import __vite__cjsImport7_vue3Apexcharts from "/node_modules/.vite/deps/vue3-apexcharts.js?v=a0d060ca"; const VueApexCharts = __vite__cjsImport7_vue3Apexcharts.__esModule ? __vite__cjsImport7_vue3Apexcharts.default : __vite__cjsImport7_vue3Apexcharts;
import { ObjToURLQueryString } from "/resources/js/functions.js";

export function resolvePageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
      return typeof pages[path] === "function" ? pages[path]() : pages[path];
    }
  }

  throw new Error(`Page not found: ${name}`);
}

createInertiaApp({
  resolve(name) {
    return resolvePageComponent(name, /* #__PURE__ */ Object.assign({"./Pages/Admin/AccessManagement.vue": () => import("/resources/js/Pages/Admin/AccessManagement.vue"),"./Pages/Admin/Backup/Backup.vue": () => import("/resources/js/Pages/Admin/Backup/Backup.vue"),"./Pages/Admin/Cities/Cities.vue": () => import("/resources/js/Pages/Admin/Cities/Cities.vue"),"./Pages/Admin/Dashboard/AutomatedDashboard.vue": () => import("/resources/js/Pages/Admin/Dashboard/AutomatedDashboard.vue"),"./Pages/Admin/Dashboard/BackofficeDashboard.vue": () => import("/resources/js/Pages/Admin/Dashboard/BackofficeDashboard.vue"),"./Pages/Admin/Dashboard/Chats.vue": () => import("/resources/js/Pages/Admin/Dashboard/Chats.vue"),"./Pages/Admin/Dashboard/Dashboard.vue": () => import("/resources/js/Pages/Admin/Dashboard/Dashboard.vue"),"./Pages/Admin/Dashboard/Dashboards.vue": () => import("/resources/js/Pages/Admin/Dashboard/Dashboards.vue"),"./Pages/Admin/Dashboard/SMSDashboard.vue": () => import("/resources/js/Pages/Admin/Dashboard/SMSDashboard.vue"),"./Pages/Admin/Departments/Departments.vue": () => import("/resources/js/Pages/Admin/Departments/Departments.vue"),"./Pages/Admin/Departments/DepartmentsCategories.vue": () => import("/resources/js/Pages/Admin/Departments/DepartmentsCategories.vue"),"./Pages/Admin/Departments/Projects.vue": () => import("/resources/js/Pages/Admin/Departments/Projects.vue"),"./Pages/Admin/Departments/Questions.vue": () => import("/resources/js/Pages/Admin/Departments/Questions.vue"),"./Pages/Admin/Departments/Services.vue": () => import("/resources/js/Pages/Admin/Departments/Services.vue"),"./Pages/Admin/IncomingInitializing.vue": () => import("/resources/js/Pages/Admin/IncomingInitializing.vue"),"./Pages/Admin/Quality/Questions.vue": () => import("/resources/js/Pages/Admin/Quality/Questions.vue"),"./Pages/Admin/Quality/Records.vue": () => import("/resources/js/Pages/Admin/Quality/Records.vue"),"./Pages/Admin/Quality/Types.vue": () => import("/resources/js/Pages/Admin/Quality/Types.vue"),"./Pages/Admin/Questions.vue": () => import("/resources/js/Pages/Admin/Questions.vue"),"./Pages/Admin/Reports/Automated/Automated.vue": () => import("/resources/js/Pages/Admin/Reports/Automated/Automated.vue"),"./Pages/Admin/Reports/Automated/Calls.vue": () => import("/resources/js/Pages/Admin/Reports/Automated/Calls.vue"),"./Pages/Admin/Reports/Automated/Statistics.vue": () => import("/resources/js/Pages/Admin/Reports/Automated/Statistics.vue"),"./Pages/Admin/Reports/Backoffice/Backoffice.vue": () => import("/resources/js/Pages/Admin/Reports/Backoffice/Backoffice.vue"),"./Pages/Admin/Reports/Backoffice/Cases.vue": () => import("/resources/js/Pages/Admin/Reports/Backoffice/Cases.vue"),"./Pages/Admin/Reports/Backoffice/Statistics.vue": () => import("/resources/js/Pages/Admin/Reports/Backoffice/Statistics.vue"),"./Pages/Admin/Reports/Chats/AverageReplyTime.vue": () => import("/resources/js/Pages/Admin/Reports/Chats/AverageReplyTime.vue"),"./Pages/Admin/Reports/Chats/Channels.vue": () => import("/resources/js/Pages/Admin/Reports/Chats/Channels.vue"),"./Pages/Admin/Reports/Chats/Chats.vue": () => import("/resources/js/Pages/Admin/Reports/Chats/Chats.vue"),"./Pages/Admin/Reports/Chats/ClickStatistics.vue": () => import("/resources/js/Pages/Admin/Reports/Chats/ClickStatistics.vue"),"./Pages/Admin/Reports/Chats/Whatsapp.vue": () => import("/resources/js/Pages/Admin/Reports/Chats/Whatsapp.vue"),"./Pages/Admin/Reports/Fast/Fast.vue": () => import("/resources/js/Pages/Admin/Reports/Fast/Fast.vue"),"./Pages/Admin/Reports/Fast/IncomingCustomReport.vue": () => import("/resources/js/Pages/Admin/Reports/Fast/IncomingCustomReport.vue"),"./Pages/Admin/Reports/Fast/ProjectReport.vue": () => import("/resources/js/Pages/Admin/Reports/Fast/ProjectReport.vue"),"./Pages/Admin/Reports/Fast/RecallReport.vue": () => import("/resources/js/Pages/Admin/Reports/Fast/RecallReport.vue"),"./Pages/Admin/Reports/Incoming/Answers.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Answers.vue"),"./Pages/Admin/Reports/Incoming/Calls.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Calls.vue"),"./Pages/Admin/Reports/Incoming/Customers.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Customers.vue"),"./Pages/Admin/Reports/Incoming/Incoming.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Incoming.vue"),"./Pages/Admin/Reports/Incoming/IncomingPage.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/IncomingPage.vue"),"./Pages/Admin/Reports/Incoming/Pause.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Pause.vue"),"./Pages/Admin/Reports/Incoming/Performance.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Performance.vue"),"./Pages/Admin/Reports/Incoming/Statistics.vue": () => import("/resources/js/Pages/Admin/Reports/Incoming/Statistics.vue"),"./Pages/Admin/Reports/Outgoing/Answers.vue": () => import("/resources/js/Pages/Admin/Reports/Outgoing/Answers.vue"),"./Pages/Admin/Reports/Outgoing/Calls.vue": () => import("/resources/js/Pages/Admin/Reports/Outgoing/Calls.vue"),"./Pages/Admin/Reports/Outgoing/DataTable.vue": () => import("/resources/js/Pages/Admin/Reports/Outgoing/DataTable.vue"),"./Pages/Admin/Reports/Outgoing/Outgoing.vue": () => import("/resources/js/Pages/Admin/Reports/Outgoing/Outgoing.vue"),"./Pages/Admin/Reports/Outgoing/Statistics.vue": () => import("/resources/js/Pages/Admin/Reports/Outgoing/Statistics.vue"),"./Pages/Admin/Reports/Quality/Calls.vue": () => import("/resources/js/Pages/Admin/Reports/Quality/Calls.vue"),"./Pages/Admin/Reports/Quality/Performance.vue": () => import("/resources/js/Pages/Admin/Reports/Quality/Performance.vue"),"./Pages/Admin/Reports/Quality/Quality.vue": () => import("/resources/js/Pages/Admin/Reports/Quality/Quality.vue"),"./Pages/Admin/Reports/Quality/Statistics.vue": () => import("/resources/js/Pages/Admin/Reports/Quality/Statistics.vue"),"./Pages/Admin/Reports/Reports.vue": () => import("/resources/js/Pages/Admin/Reports/Reports.vue"),"./Pages/Admin/Reports/SMS/Messages.vue": () => import("/resources/js/Pages/Admin/Reports/SMS/Messages.vue"),"./Pages/Admin/Reports/SMS/SMS.vue": () => import("/resources/js/Pages/Admin/Reports/SMS/SMS.vue"),"./Pages/Admin/Roles/Roles.vue": () => import("/resources/js/Pages/Admin/Roles/Roles.vue"),"./Pages/Admin/Users/OutgoingAgents.vue": () => import("/resources/js/Pages/Admin/Users/OutgoingAgents.vue"),"./Pages/Admin/Users/OutgoingUsers.vue": () => import("/resources/js/Pages/Admin/Users/OutgoingUsers.vue"),"./Pages/Admin/Users/Users.vue": () => import("/resources/js/Pages/Admin/Users/Users.vue"),"./Pages/Automated/Accounts/Accounts.vue": () => import("/resources/js/Pages/Automated/Accounts/Accounts.vue"),"./Pages/Automated/Departments/Departments.vue": () => import("/resources/js/Pages/Automated/Departments/Departments.vue"),"./Pages/Automated/Departments/Questions.vue": () => import("/resources/js/Pages/Automated/Departments/Questions.vue"),"./Pages/Automated/Initializing.vue": () => import("/resources/js/Pages/Automated/Initializing.vue"),"./Pages/Automated/Tasks/Tasks.vue": () => import("/resources/js/Pages/Automated/Tasks/Tasks.vue"),"./Pages/Backoffice/Cases/CaseDetails.vue": () => import("/resources/js/Pages/Backoffice/Cases/CaseDetails.vue"),"./Pages/Backoffice/Cases/Cases.vue": () => import("/resources/js/Pages/Backoffice/Cases/Cases.vue"),"./Pages/Backoffice/Groups/Group.vue": () => import("/resources/js/Pages/Backoffice/Groups/Group.vue"),"./Pages/Backoffice/Groups/Groups.vue": () => import("/resources/js/Pages/Backoffice/Groups/Groups.vue"),"./Pages/Backoffice/Groups/Linked/Departments.vue": () => import("/resources/js/Pages/Backoffice/Groups/Linked/Departments.vue"),"./Pages/Backoffice/Groups/Linked/Labels.vue": () => import("/resources/js/Pages/Backoffice/Groups/Linked/Labels.vue"),"./Pages/Backoffice/Groups/Linked/PersonalAnswers.vue": () => import("/resources/js/Pages/Backoffice/Groups/Linked/PersonalAnswers.vue"),"./Pages/Backoffice/Groups/Linked/Users.vue": () => import("/resources/js/Pages/Backoffice/Groups/Linked/Users.vue"),"./Pages/Backoffice/Groups/Questions/Questions.vue": () => import("/resources/js/Pages/Backoffice/Groups/Questions/Questions.vue"),"./Pages/Broadcasting/Groups/Groups.vue": () => import("/resources/js/Pages/Broadcasting/Groups/Groups.vue"),"./Pages/Broadcasting/Groups/Members.vue": () => import("/resources/js/Pages/Broadcasting/Groups/Members.vue"),"./Pages/Broadcasting/Messages.vue": () => import("/resources/js/Pages/Broadcasting/Messages.vue"),"./Pages/Chatbot/Bots/Bots.vue": () => import("/resources/js/Pages/Chatbot/Bots/Bots.vue"),"./Pages/Chatbot/Bots/Messages.vue": () => import("/resources/js/Pages/Chatbot/Bots/Messages.vue"),"./Pages/Chatbot/Chatbot.vue": () => import("/resources/js/Pages/Chatbot/Chatbot.vue"),"./Pages/Chatbot/Chats/Chat.vue": () => import("/resources/js/Pages/Chatbot/Chats/Chat.vue"),"./Pages/Chatbot/Chats/Chats.vue": () => import("/resources/js/Pages/Chatbot/Chats/Chats.vue"),"./Pages/Chatbot/Groups/Groups.vue": () => import("/resources/js/Pages/Chatbot/Groups/Groups.vue"),"./Pages/Chatbot/Groups/Users.vue": () => import("/resources/js/Pages/Chatbot/Groups/Users.vue"),"./Pages/Chatbot/Labels/Labels.vue": () => import("/resources/js/Pages/Chatbot/Labels/Labels.vue"),"./Pages/Chatbot/Processes/Details.vue": () => import("/resources/js/Pages/Chatbot/Processes/Details.vue"),"./Pages/Chatbot/Processes/Processes.vue": () => import("/resources/js/Pages/Chatbot/Processes/Processes.vue"),"./Pages/Clipboard/Categories.vue": () => import("/resources/js/Pages/Clipboard/Categories.vue"),"./Pages/Clipboard/Clipboards.vue": () => import("/resources/js/Pages/Clipboard/Clipboards.vue"),"./Pages/Comments/Comments.vue": () => import("/resources/js/Pages/Comments/Comments.vue"),"./Pages/Comments/Facebook.vue": () => import("/resources/js/Pages/Comments/Facebook.vue"),"./Pages/DataSource/DataSource.vue": () => import("/resources/js/Pages/DataSource/DataSource.vue"),"./Pages/Email/Chats/ChatDetails.vue": () => import("/resources/js/Pages/Email/Chats/ChatDetails.vue"),"./Pages/Email/Chats/Chats.vue": () => import("/resources/js/Pages/Email/Chats/Chats.vue"),"./Pages/Email/Email.vue": () => import("/resources/js/Pages/Email/Email.vue"),"./Pages/Email/Labels/Labels.vue": () => import("/resources/js/Pages/Email/Labels/Labels.vue"),"./Pages/Emails/Case.vue": () => import("/resources/js/Pages/Emails/Case.vue"),"./Pages/Embedded/Embedded.vue": () => import("/resources/js/Pages/Embedded/Embedded.vue"),"./Pages/Error.vue": () => import("/resources/js/Pages/Error.vue"),"./Pages/ExcelData/Data.vue": () => import("/resources/js/Pages/ExcelData/Data.vue"),"./Pages/FollowUp/Call.vue": () => import("/resources/js/Pages/FollowUp/Call.vue"),"./Pages/FollowUp/FollowUp.vue": () => import("/resources/js/Pages/FollowUp/FollowUp.vue"),"./Pages/Home.vue": () => import("/resources/js/Pages/Home.vue"),"./Pages/Incoming/Agent/Call.vue": () => import("/resources/js/Pages/Incoming/Agent/Call.vue"),"./Pages/Incoming/Agent/Cases.vue": () => import("/resources/js/Pages/Incoming/Agent/Cases.vue"),"./Pages/Incoming/EditCallAsk.vue": () => import("/resources/js/Pages/Incoming/EditCallAsk.vue"),"./Pages/Incoming/EditCustomer.vue": () => import("/resources/js/Pages/Incoming/EditCustomer.vue"),"./Pages/Incoming/Supervisor/CallStatuses/CallStatuses.vue": () => import("/resources/js/Pages/Incoming/Supervisor/CallStatuses/CallStatuses.vue"),"./Pages/Incoming/Supervisor/Cases/Cases.vue": () => import("/resources/js/Pages/Incoming/Supervisor/Cases/Cases.vue"),"./Pages/Incoming/Supervisor/Departments/Departments.vue": () => import("/resources/js/Pages/Incoming/Supervisor/Departments/Departments.vue"),"./Pages/Incoming/Supervisor/Departments/Questions.vue": () => import("/resources/js/Pages/Incoming/Supervisor/Departments/Questions.vue"),"./Pages/Incoming/Supervisor/Labels/Labels.vue": () => import("/resources/js/Pages/Incoming/Supervisor/Labels/Labels.vue"),"./Pages/Incoming/Supervisor/Levels/Levels.vue": () => import("/resources/js/Pages/Incoming/Supervisor/Levels/Levels.vue"),"./Pages/Incoming/Supervisor/Relations/Relations.vue": () => import("/resources/js/Pages/Incoming/Supervisor/Relations/Relations.vue"),"./Pages/KnowledgeBase/KnowledgeBase.vue": () => import("/resources/js/Pages/KnowledgeBase/KnowledgeBase.vue"),"./Pages/Login.vue": () => import("/resources/js/Pages/Login.vue"),"./Pages/Notifications/Groups.vue": () => import("/resources/js/Pages/Notifications/Groups.vue"),"./Pages/Notifications/Users.vue": () => import("/resources/js/Pages/Notifications/Users.vue"),"./Pages/Outgoing/Agent/QualityRatingDetails.vue": () => import("/resources/js/Pages/Outgoing/Agent/QualityRatingDetails.vue"),"./Pages/Outgoing/Agent/RatedCalls.vue": () => import("/resources/js/Pages/Outgoing/Agent/RatedCalls.vue"),"./Pages/Outgoing/Agent/TaskDetails.vue": () => import("/resources/js/Pages/Outgoing/Agent/TaskDetails.vue"),"./Pages/Outgoing/Agent/Tasks.vue": () => import("/resources/js/Pages/Outgoing/Agent/Tasks.vue"),"./Pages/Outgoing/Supervisor/TaskDetails.vue": () => import("/resources/js/Pages/Outgoing/Supervisor/TaskDetails.vue"),"./Pages/Outgoing/Supervisor/Tasks.vue": () => import("/resources/js/Pages/Outgoing/Supervisor/Tasks.vue"),"./Pages/PauseReasons/PauseReasons.vue": () => import("/resources/js/Pages/PauseReasons/PauseReasons.vue"),"./Pages/Quality/Manager/Agents.vue": () => import("/resources/js/Pages/Quality/Manager/Agents.vue"),"./Pages/Quality/Manager/EvaluateAgent.vue": () => import("/resources/js/Pages/Quality/Manager/EvaluateAgent.vue"),"./Pages/Quality/Manager/EvaluateCall.vue": () => import("/resources/js/Pages/Quality/Manager/EvaluateCall.vue"),"./Pages/Quality/Manager/TaskDetails.vue": () => import("/resources/js/Pages/Quality/Manager/TaskDetails.vue"),"./Pages/Quality/Manager/Tasks.vue": () => import("/resources/js/Pages/Quality/Manager/Tasks.vue"),"./Pages/Quality/Supervisor/AddTask.vue": () => import("/resources/js/Pages/Quality/Supervisor/AddTask.vue"),"./Pages/Quality/Supervisor/ManagerWorkDetails.vue": () => import("/resources/js/Pages/Quality/Supervisor/ManagerWorkDetails.vue"),"./Pages/Quality/Supervisor/TaskDetails.vue": () => import("/resources/js/Pages/Quality/Supervisor/TaskDetails.vue"),"./Pages/Quality/Supervisor/TaskReportsPage.vue": () => import("/resources/js/Pages/Quality/Supervisor/TaskReportsPage.vue"),"./Pages/Quality/Supervisor/Tasks.vue": () => import("/resources/js/Pages/Quality/Supervisor/Tasks.vue"),"./Pages/SMS/Departments/Departments.vue": () => import("/resources/js/Pages/SMS/Departments/Departments.vue"),"./Pages/SMS/Departments/Messages.vue": () => import("/resources/js/Pages/SMS/Departments/Messages.vue"),"./Pages/SMS/Send.vue": () => import("/resources/js/Pages/SMS/Send.vue"),"./Pages/Settings/Index.vue": () => import("/resources/js/Pages/Settings/Index.vue"),"./Pages/Settings/Language.vue": () => import("/resources/js/Pages/Settings/Language.vue"),"./Pages/Settings/Settings.vue": () => import("/resources/js/Pages/Settings/Settings.vue"),"./Pages/TimeFrames/EditTimeFrame.vue": () => import("/resources/js/Pages/TimeFrames/EditTimeFrame.vue?t=1722513229629"),"./Pages/TimeFrames/Index.vue": () => import("/resources/js/Pages/TimeFrames/Index.vue?t=1722509971047"),"./Pages/Whitelist/Numbers.vue": () => import("/resources/js/Pages/Whitelist/Numbers.vue")}));
  },
  async setup({ el, App, props, plugin }) {
    await store.getLang(props?.initialPage?.props?.languages);
    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(VueApexCharts)
      .use(autoAnimatePlugin)
      .component("inertia-link", InertiaLink)
      .directive("click-outside", {
        beforeMount(el, binding, vnode) {
          el.clickOutsideEvent = (evt) => {
            evt.stopPropagation();
            if (!(el === evt.target || el.contains(evt.target))) {
              binding.value(evt, el);
            }
          };
          // Wait 1 frame otherwise a potential click that mounted the element will immediately trigger a click-outside event:
          window.requestAnimationFrame(() => {
            document.addEventListener("click", el.clickOutsideEvent);
          });
        },
        unmounted(el) {
          document.removeEventListener("click", el.clickOutsideEvent);
        },
      });
    app.config.globalProperties.$store = store;
    store.setPageDirection();
    app.config.globalProperties.$ObjToURLQueryString = ObjToURLQueryString;
    app.mount(el);
  },
});

InertiaProgress.init({ color: "#190f4e" });
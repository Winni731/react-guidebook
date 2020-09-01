(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"6IcP":function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"profiler"},t.a.createElement("a",{"aria-hidden":"true",href:"#profiler"},t.a.createElement("span",{className:"icon icon-link"})),"Profiler"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u2728 \u9002\u7528\u4e8e React v16.5+")),t.a.createElement("p",null,"Profiler \u6d4b\u91cf\u6e32\u67d3\u4e00\u4e2a React \u5e94\u7528\u591a\u4e45\u6e32\u67d3\u4e00\u6b21\u4ee5\u53ca\u6e32\u67d3\u4e00\u6b21\u7684\u300c\u4ee3\u4ef7\u300d\u3002 \u5b83\u7684\u76ee\u7684\u662f\u8bc6\u522b\u51fa\u5e94\u7528\u4e2d\u6e32\u67d3\u8f83\u6162\u7684\u90e8\u5206\uff0c\u6216\u662f\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c memoization \u4f18\u5316\u7684\u90e8\u5206\uff0c\u5e76\u4ece\u76f8\u5173\u4f18\u5316\u4e2d\u83b7\u76ca\u3002"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u26a0\ufe0f ",t.a.createElement("strong",null,"\u6ce8\u610f"),"\uff1aProfiling \u589e\u52a0\u4e86\u989d\u5916\u7684\u5f00\u652f\uff0c\u6240\u4ee5\u5b83\u5728\u751f\u4ea7\u6784\u5efa\u4e2d\u4f1a\u88ab\u7981\u7528\u3002")),t.a.createElement("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u4f7f\u7528\u65b9\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u65b9\u6cd5"),t.a.createElement("p",null,t.a.createElement("code",null,"<Profiler>")," \u80fd\u6dfb\u52a0\u5728 React \u6811\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\u6765\u6d4b\u91cf\u6811\u4e2d\u8fd9\u90e8\u5206\u6e32\u67d3\u6240\u5e26\u6765\u7684\u5f00\u9500\u3002\u5b83\u9700\u8981\u4e24\u4e2a ",t.a.createElement("code",null,"props"),"\uff1a\u4e00\u4e2a\u662f ",t.a.createElement("code",null,"id"),"\uff08string\uff09\uff0c\u4e00\u4e2a\u662f\u5f53\u7ec4\u4ef6\u6811\u4e2d\u7684\u7ec4\u4ef6\u63d0\u4ea4\u66f4\u65b0\u7684\u65f6\u5019\u88ab React \u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570 ",t.a.createElement("code",null,"onRender"),"\uff08function\uff09\u3002"),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")," \u4e3a\u4e86\u5206\u6790 ",t.a.createElement("code",null,"Navigation")," \u7ec4\u4ef6\u53ca\u5176\u5b50\u4ee3"),t.a.createElement(c.a,{code:'render(\n  <App>\n    <Profiler id="navigation" onRender={callback}>\n      <Navigation {...props} />\n    </Profiler>\n  </App>\n);\n',lang:"jsx"}),t.a.createElement("p",null,"\u591a\u4e2a ",t.a.createElement("code",null,"<Profiler>")," \u7ec4\u4ef6\u7231\u4f60\u80fd\u6d4b\u91cf\u5e94\u7528\u4e2d\u7684\u4e0d\u540c\u90e8\u5206\uff1a"),t.a.createElement(c.a,{code:'render(\n  <App>\n    <Profiler id="navigation" onRender={callback}>\n      <Navigation {...props} />\n    </Profiler>\n    <Profiler id="main" onRender={callback}>\n      <Main {...props} />\n    </Profiler>\n  </App>\n);\n',lang:"jsx"}),t.a.createElement("p",null,"\u5d4c\u5957\u4f7f\u7528 ",t.a.createElement("code",null,"<Profiler>")," \u7ec4\u4ef6\u6765\u6d4b\u91cf\u76f8\u540c\u4e00\u4e2a\u5b50\u6811\u4e0b\u7684\u4e0d\u540c\u7ec4\u4ef6\u3002"),t.a.createElement(c.a,{code:'render(\n  <App>\n    <Profiler id="Panel" onRender={callback}>\n      <Panel {...props}>\n        <Profiler id="Content" onRender={callback}>\n          <Content {...props} />\n        </Profiler>\n        <Profiler id="PreviewPane" onRender={callback}>\n          <PreviewPane {...props} />\n        </Profiler>\n      </Panel>\n    </Profiler>\n  </App>\n);\n',lang:"jsx"}),t.a.createElement("h2",{id:"onrender-\u56de\u8c03"},t.a.createElement("a",{"aria-hidden":"true",href:"#onrender-\u56de\u8c03"},t.a.createElement("span",{className:"icon icon-link"})),"onRender \u56de\u8c03"),t.a.createElement("p",null,t.a.createElement("code",null,"<Profiler>")," \u9700\u8981\u4e00\u4e2a ",t.a.createElement("code",null,"onRender")," \u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u3002 React \u4f1a\u5728 ",t.a.createElement("code",null,"profile")," \u5305\u542b\u7684\u7ec4\u4ef6\u6811\u4e2d\u4efb\u4f55\u7ec4\u4ef6 \u300c\u63d0\u4ea4\u300d \u4e00\u4e2a\u66f4\u65b0\u7684\u65f6\u5019\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002 \u5b83\u7684\u53c2\u6570\u63cf\u8ff0\u4e86\u6e32\u67d3\u4e86\u4ec0\u4e48\u548c\u82b1\u8d39\u4e86\u591a\u4e45\u3002"),t.a.createElement(c.a,{code:'function onRenderCallback(\n  id, // \u53d1\u751f\u63d0\u4ea4\u7684 Profiler \u6811\u7684 \u201cid\u201d\n  phase, // "mount" \uff08\u5982\u679c\u7ec4\u4ef6\u6811\u521a\u52a0\u8f7d\uff09 \u6216\u8005 "update" \uff08\u5982\u679c\u5b83\u91cd\u6e32\u67d3\u4e86\uff09\u4e4b\u4e00\n  actualDuration, // \u672c\u6b21\u66f4\u65b0 committed \u82b1\u8d39\u7684\u6e32\u67d3\u65f6\u95f4\n  baseDuration, // \u4f30\u8ba1\u4e0d\u4f7f\u7528 memoization \u7684\u60c5\u51b5\u4e0b\u6e32\u67d3\u6574\u9897\u5b50\u6811\u9700\u8981\u7684\u65f6\u95f4\n  startTime, // \u672c\u6b21\u66f4\u65b0\u4e2d React \u5f00\u59cb\u6e32\u67d3\u7684\u65f6\u95f4\n  commitTime, // \u672c\u6b21\u66f4\u65b0\u4e2d React committed \u7684\u65f6\u95f4\n  interactions // \u5c5e\u4e8e\u672c\u6b21\u66f4\u65b0\u7684 interactions \u7684\u96c6\u5408\n) {\n  // \u5408\u8ba1\u6216\u8bb0\u5f55\u6e32\u67d3\u65f6\u95f4\u3002\u3002\u3002\n}\n',lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"id: string")," - \u53d1\u751f\u63d0\u4ea4\u7684 Profiler \u6811\u7684 id\u3002 \u5982\u679c\u6709\u591a\u4e2a profiler\uff0c\u5b83\u80fd\u7528\u6765\u5206\u8fa8\u6811\u7684\u54ea\u4e00\u90e8\u5206\u53d1\u751f\u4e86\u201c\u63d0\u4ea4\u201d\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,'phase: "mount" | "update"')," - \u5224\u65ad\u662f\u7ec4\u4ef6\u6811\u7684\u7b2c\u4e00\u6b21\u88c5\u8f7d\u5f15\u8d77\u7684\u91cd\u6e32\u67d3\uff0c\u8fd8\u662f\u7531 props\u3001state \u6216\u662f hooks \u6539\u53d8\u5f15\u8d77\u7684\u91cd\u6e32\u67d3\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"actualDuration: number")," - \u672c\u6b21\u66f4\u65b0\u5728\u6e32\u67d3 Profiler \u548c\u5b83\u7684\u5b50\u4ee3\u4e0a\u82b1\u8d39\u7684\u65f6\u95f4\u3002 \u8fd9\u4e2a\u6570\u503c\u8868\u660e\u4f7f\u7528 memoization \u4e4b\u540e\u80fd\u8868\u73b0\u5f97\u591a\u597d\u3002\uff08\u4f8b\u5982 React.memo\uff0cuseMemo\uff0cshouldComponentUpdate\uff09\u3002 \u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u5b50\u4ee3\u53ea\u4f1a\u56e0\u7279\u5b9a\u7684 prop \u6539\u53d8\u800c\u91cd\u6e32\u67d3\uff0c\u56e0\u6b64\u8fd9\u4e2a\u503c\u5e94\u8be5\u5728\u7b2c\u4e00\u6b21\u88c5\u8f7d\u4e4b\u540e\u663e\u8457\u4e0b\u964d\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"baseDuration: number")," - \u5728 Profiler \u6811\u4e2d\u6700\u8fd1\u4e00\u6b21\u6bcf\u4e00\u4e2a\u7ec4\u4ef6 render \u7684\u6301\u7eed\u65f6\u95f4\u3002 \u8fd9\u4e2a\u503c\u4f30\u8ba1\u4e86\u6700\u5dee\u7684\u6e32\u67d3\u65f6\u95f4\u3002\uff08\u4f8b\u5982\u5f53\u5b83\u662f\u7b2c\u4e00\u6b21\u52a0\u8f7d\u6216\u8005\u7ec4\u4ef6\u6811\u6ca1\u6709\u4f7f\u7528 memoization\uff09\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"startTime: number")," - \u672c\u6b21\u66f4\u65b0\u4e2d React \u5f00\u59cb\u6e32\u67d3\u7684\u65f6\u95f4\u6233\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"commitTime: number")," - \u672c\u6b21\u66f4\u65b0\u4e2d React commit \u9636\u6bb5\u7ed3\u675f\u7684\u65f6\u95f4\u6233\u3002 \u5728\u4e00\u6b21 commit \u4e2d\u8fd9\u4e2a\u503c\u5728\u6240\u6709\u7684 profiler \u4e4b\u95f4\u662f\u5171\u4eab\u7684\uff0c\u53ef\u4ee5\u5c06\u5b83\u4eec\u6309\u9700\u5206\u7ec4\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"interactions: Set")," - \u5f53\u66f4\u65b0\u88ab\u5236\u5b9a\u65f6\uff0c\u201cinteractions\u201d \u7684\u96c6\u5408\u4f1a\u88ab\u8ffd\u8e2a\u3002\uff08\u4f8b\u5982\u5f53 render \u6216\u8005 setState \u88ab\u8c03\u7528\u65f6\uff09\u3002")),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u26a0\ufe0f ",t.a.createElement("strong",null,"\u6ce8\u610f"),"\uff1aInteractions \u80fd\u7528\u4f86\u8bc6\u522b\u66f4\u65b0\u662f\u7531\u4ec0\u4e48\u5f15\u8d77\u7684\uff0c\u5c3d\u7ba1\u8fd9\u4e2a\u8ffd\u8e2a\u66f4\u65b0\u7684 API \u4f9d\u7136\u662f\u5b9e\u9a8c\u6027\u8d28\u7684\u3002 \u4ece ",t.a.createElement("a",{href:"https://fb.me/react-interaction-tracing",target:"_blank",rel:"noopener noreferrer"},"fb.me/react-interaction-tracing",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))," \u4e86\u89e3\u66f4\u591a")),t.a.createElement("hr",null),t.a.createElement("p",null,t.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("a",{href:"https://juejin.im/post/5ba0f8e4f265da0ab915bcf2",target:"_blank",rel:"noopener noreferrer"},"React Profiler \u4ecb\u7ecd",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),t.a.createElement("li",null,t.a.createElement("a",{href:"https://juejin.im/post/5d06bf0a51882528194a9736",target:"_blank",rel:"noopener noreferrer"},"React \u6027\u80fd\u6d4b\u91cf\u548c\u5206\u6790",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);
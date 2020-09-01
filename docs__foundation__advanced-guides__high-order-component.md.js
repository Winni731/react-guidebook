(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{mNEY:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(l);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u9ad8\u9636\u7ec4\u4ef6"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u9ad8\u9636\u7ec4\u4ef6"},r.a.createElement("span",{className:"icon icon-link"})),"\u9ad8\u9636\u7ec4\u4ef6"),r.a.createElement("p",null,"\u9ad8\u9636\u7ec4\u4ef6\uff08High-Order Component\uff09\u63a5\u53d7 React \u7ec4\u4ef6\u4f5c\u4e3a\u8f93\u5165\uff0c\u8f93\u51fa\u4e00\u4e2a\u65b0\u7684 React \u7ec4\u4ef6\u3002"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u9ad8\u9636\u7ec4\u4ef6\u4e0d\u662f\u7ec4\u4ef6\uff0c\u662f\u589e\u5f3a\u51fd\u6570\uff0c\u53ef\u4ee5\u8f93\u5165\u4e00\u4e2a\u5143\u7ec4\u4ef6\uff0c\u8f93\u51fa\u4e00\u4e2a\u65b0\u7684\u589e\u5f3a\u7ec4\u4ef6"),r.a.createElement("li",null,"\u9ad8\u9636\u7ec4\u4ef6\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u4ee3\u7801\u590d\u7528\uff0c\u64cd\u4f5c\u72b6\u6001\u548c\u53c2\u6570")),r.a.createElement("p",null,r.a.createElement("strong",null,"\u5b9e\u73b0\u9ad8\u9636\u7ec4\u4ef6\u7684\u65b9\u6cd5\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#%E5%B1%9E%E6%80%A7%E4%BB%A3%E7%90%86"},"\u5c5e\u6027\u4ee3\u7406"),"\uff08props proxy\uff09\u3002\u9ad8\u9636\u7ec4\u4ef6\u901a\u8fc7\u88ab\u5305\u88f9\u7684 React \u7ec4\u4ef6\u6765\u64cd\u4f5c ",r.a.createElement("code",null,"props"),"\u3002"),r.a.createElement("li",null,r.a.createElement("a",{href:"#%E5%8F%8D%E5%90%91%E7%BB%A7%E6%89%BF"},"\u53cd\u5411\u7ee7\u627f"),"\uff08inheritance inversion\uff09\u3002\u9ad8\u9636\u7ec4\u4ef6\u7ee7\u627f\u4e8e\u88ab\u5305\u88f9\u7684 React \u7ec4\u4ef6\u3002")),r.a.createElement("h2",{id:"\u5c5e\u6027\u4ee3\u7406"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u4ee3\u7406"},r.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u4ee3\u7406"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u5c5e\u6027\u4ee3\u7406"),"\uff08Props Proxy\uff09\uff1a\u8f93\u51fa\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u57fa\u4e8e\u88ab\u5305\u88f9\u7ec4\u4ef6\u8fdb\u884c ",r.a.createElement("strong",null,"\u529f\u80fd\u589e\u5f3a"),"\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),r.a.createElement(o.a,{code:"import React from 'react';\n\nconst MyContainer = WrappedComponent =>\n  class extends Component {\n    render() {\n      return <WrapperdComponent {...this.props} />;\n    }\n  };\n",lang:"jsx"}),r.a.createElement("p",null,"\u8fd9\u91cc\u7684\u9ad8\u9636\u7ec4\u4ef6\u4e2d\u91c7\u7528\u4e86\u533f\u540d\u7c7b\u901a\u8fc7 ",r.a.createElement("code",null,"render")," \u65b9\u6cd5\u8fd4\u56de\u4f20\u5165\u7684 React \u7ec4\u4ef6\uff08WrappedComponent\uff09\u3002\u901a\u8fc7\u9ad8\u9636\u7ec4\u4ef6\u4f20\u9012 ",r.a.createElement("code",null,"props"),"\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5373\u4e3a ",r.a.createElement("strong",null,"\u5c5e\u6027\u4ee3\u7406"),"\u3002"),r.a.createElement("p",null,"\u8fd9\u6837\u7ec4\u4ef6\u5c31\u53ef\u4ee5\u4e00\u5c42\u5c42\u5730\u4f5c\u4e3a\u53c2\u6570\u88ab\u8c03\u7528\uff0c\u539f\u59cb\u7ec4\u4ef6\u5c31\u5177\u5907\u4e86\u9ad8\u9636\u7ec4\u4ef6\u5bf9\u5b83\u7684\u4fee\u9970\u3002\u5c31\u8fd9\u4e48\u7b80\u5355\uff0c\u4fdd\u6301\u5355\u4e2a\u7ec4\u4ef6\u5c01\u88c5\u6027\u7684\u540c\u65f6\u8fd8\u4fdd\u7559\u4e86\u6613\u7528\u6027\u3002"),r.a.createElement("h3",{id:"\u9ed8\u8ba4\u53c2\u6570"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u9ed8\u8ba4\u53c2\u6570"},r.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u53c2\u6570"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u9ed8\u8ba4\u53c2\u6570"),"\uff1a\u53ef\u4ee5\u4e3a\u7ec4\u4ef6\u5305\u88f9\u4e00\u5c42\u9ed8\u8ba4\u53c2\u6570\u3002"),r.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u8bfb\u53d6\u3001\u589e\u52a0\u3001\u7f16\u8f91\u6216\u662f\u79fb\u9664\u4ece\u539f\u7ec4\u4ef6\uff08WrappedComponent\uff09\u4f20\u8fdb\u6765\u7684 ",r.a.createElement("code",null,"props"),"\uff0c\u4f46\u9700\u8981\u5c0f\u5fc3\u5220\u9664\u4e0e\u7f16\u8f91\u91cd\u8981\u7684 ",r.a.createElement("code",null,"props"),"\u3002\u6211\u4eec\u5e94\u8be5\u5c3d\u53ef\u80fd\u5bf9\u9ad8\u9636\u7ec4\u4ef6\u7684 ",r.a.createElement("code",null,"props")," \u4f5c\u65b0\u7684\u547d\u540d\u4ee5\u9632\u6b62\u6df7\u6dc6\u3002"),r.a.createElement(o.a,{code:"import React from 'react';\n\nconst MyContainer = WrappedComponent =>\n  class extends React.Component {\n    render() {\n      const newProps = {\n        name: nextName,\n      };\n      return <WrappedComponent {...this.props} {...newProps} />;\n    }\n  };\n",lang:"js"}),r.a.createElement("p",null,"\u5f53\u8c03\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u65b0\u7684 props name \u4e86\u3002\u5bf9\u4e8e\u539f\u7ec4\u4ef6\u6765\u8bf4\uff0c\u53ea\u8981\u5957\u7528\u8fd9\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u6211\u4eec\u7684\u65b0\u7ec4\u4ef6\u4e2d\u5c31\u4f1a\u591a\u4e00\u4e2a name \u7684 props\u3002"),r.a.createElement("h3",{id:"\u901a\u8fc7-refs-\u4f7f\u7528\u5f15\u7528"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u901a\u8fc7-refs-\u4f7f\u7528\u5f15\u7528"},r.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7 Refs \u4f7f\u7528\u5f15\u7528"),r.a.createElement("p",null,"\u5728\u9ad8\u9636\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u63a5\u53d7 Refs \u4f7f\u7528\u539f\u7ec4\u4ef6\uff08WrappedComponent\uff09\u7684\u5f15\u7528\u3002"),r.a.createElement(o.a,{code:"import React from 'react';\n\nconst MyContainer = WrappedComponent =>\n  class extends React.Component {\n    proc(wrappedComponentInstance) {\n      wrappedComponentInstantce.mdethod();\n    }\n    render() {\n      const props = Object.assign({}, this.props, {\n        ref: this.proc.bind(this),\n      });\n      return <WrappedComponent {...props} />;\n    }\n  };\n",lang:"js"}),r.a.createElement("p",null,"\u5f53\u539f\u7ec4\u4ef6\uff08WrappedComponent\uff09\u88ab\u6e32\u67d3\u65f6\uff0cRefs \u56de\u8c03\u51fd\u6570\u5c31\u4f1a\u88ab\u6267\u884c\uff0c\u8fd9\u6837\u5c31\u4f1a\u62ff\u5230\u4e00\u4efd\u539f\u7ec4\u4ef6\uff08WrappedComponent\uff09\u5b9e\u4f8b\u7684\u5f15\u7528\u3002\u8fd9\u5c31\u53ef\u4ee5\u65b9\u4fbf\u5730\u7528\u4e8e\u8bfb\u53d6\u6216\u589e\u52a0\u5b9e\u4f8b\u7684 Props\uff0c\u5e76\u8c03\u7528\u5b9e\u4f8b\u7684\u65b9\u6cd5\u3002"),r.a.createElement("h3",{id:"\u62bd\u8c61\u72b6\u6001"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u62bd\u8c61\u72b6\u6001"},r.a.createElement("span",{className:"icon icon-link"})),"\u62bd\u8c61\u72b6\u6001"),r.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u539f\u7ec4\u4ef6\uff08WrappedComponent\uff09\u63d0\u4f9b\u7684 ",r.a.createElement("code",null,"props")," \u548c\u56de\u8c03\u51fd\u6570\u62bd\u8c61 State\u3002"),r.a.createElement("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u5c06\u539f\u7ec4\u4ef6\u62bd\u8c61\u4e3a\u5c55\u793a\u578b\u7ec4\u4ef6\uff0c\u5206\u79bb\u5185\u90e8\u72b6\u6001\u3002"),r.a.createElement(o.a,{code:"import React from 'react';\n\nconst MyContainer = WrappedCompoenent =>\n  class extends React.Component {\n    constructor(props) {\n      super(props);\n      this.state = {\n        name: '',\n      };\n      this.onNameChange = this.onNameChange.bind(this);\n    }\n    onNameChange(event) {\n      this.setState({\n        name: event.target.value,\n      });\n    }\n    render() {\n      const newProps = {\n        name: {\n          value: this.state.name,\n          onChange: this.onNameChange,\n        },\n      };\n      return <WrappedCompoennt {...this.props} {...newProps} />;\n    }\n  };\n",lang:"js"}),r.a.createElement(o.a,{code:"const nameInput = props => (<input name='name' {...props}) />)\nexport default MyContainer(nameInput);\n",lang:"js"}),r.a.createElement("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u628a ",r.a.createElement("code",null,"input")," \u7ec4\u4ef6\u4e2d\u5bf9 ",r.a.createElement("code",null,"name prop")," \u7684 ",r.a.createElement("code",null,"onChange")," \u65b9\u6cd5\u63d0\u53d6\u5230\u9ad8\u9636\u7ec4\u4ef6\u4e2d\uff0c\u8fd9\u6837"),r.a.createElement("p",null,"\u5c31\u6709\u6548\u5730\u62bd\u8c61\u4e86\u540c\u6837\u7684\u72b6\u6001\u64cd\u4f5c\u3002"),r.a.createElement("h3",{id:"\u5305\u88f9\u7ec4\u4ef6"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5305\u88f9\u7ec4\u4ef6"},r.a.createElement("span",{className:"icon icon-link"})),"\u5305\u88f9\u7ec4\u4ef6"),r.a.createElement("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5143\u7d20\u6765\u5305\u88f9\u539f\u7ec4\u4ef6\uff08WrappedComponent\uff09\uff0c\u8fd9\u65e2\u53ef\u4ee5\u662f\u4e3a\u4e86\u52a0\u6837\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e3a\u4e86\u5e03\u5c40\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a\u589e\u52a0\u4e00\u5c42\u5b9a\u4e49\u6837\u5f0f")),r.a.createElement(o.a,{code:"import React, { Component } from 'react'\n\nconst MyContainer = (WrappedCompoennt) =>\n     class extends Component {\n         render() {\n             return {\n                 <div style={{display: 'block'}}>\n                     <WrappedComponent {...this.props} />\n                 </div>\n             }\n         }\n     }\n",lang:"js"}),r.a.createElement("h2",{id:"\u53cd\u5411\u7ee7\u627f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u53cd\u5411\u7ee7\u627f"},r.a.createElement("span",{className:"icon icon-link"})),"\u53cd\u5411\u7ee7\u627f"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53cd\u5411\u7ee7\u627f\uff08Inheritance Inversion\uff09"),"\uff1a\u8f93\u51fa\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u7ee7\u627f\u4e8e\u88ab\u5305\u88f9\u7ec4\u4ef6\u3002"),r.a.createElement("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u8fd4\u56de\u7684 React \u7ec4\u4ef6\u7ee7\u627f\u4e86\u88ab\u4f20\u5165\u7684\u7ec4\u4ef6\uff0c\u6240\u4ee5\u5b83\u80fd\u591f\u8bbf\u95ee\u5230\u7684\u533a\u57df\u3001\u6743\u9650\u66f4\u591a\uff0c\u76f8\u6bd4\u5c5e\u6027\u4ee3\u7406\u65b9\u5f0f\uff0c\u5b83\u66f4\u50cf\u6253\u5165\u7ec4\u7ec7\u5185\u90e8\uff0c\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),r.a.createElement(o.a,{code:"const MyContainer = WrappedCompoenent =>\n  class extends WrappedComponent {\n    render() {\n      return super.render();\n    }\n  };\n",lang:"js"}),r.a.createElement("p",null,"\u6b63\u5982\u6240\u89c1\uff0c\u9ad8\u9636\u7ec4\u4ef6\u8fd4\u56de\u7684\u7ec4\u4ef6\u7ee7\u627f\u4e8e\u539f\u7ec4\u4ef6 ",r.a.createElement("code",null,"<WrappedComponent>"),"\u3002\u56e0\u4e3a\u88ab\u52a8\u5730\u7ee7\u627f\u4e86 ",r.a.createElement("code",null,"<WrappedComponent>"),"\uff0c\u6240\u6709\u7684\u8c03\u7528\u90fd\u4f1a\u53cd\u5411\uff0c\u8fd9\u4e5f\u662f\u8fd9\u79cd\u65b9\u6cd5\u7684\u7531\u6765\u3002"),r.a.createElement("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u4e0e\u5c5e\u6027\u4ee3\u7406\u4e0d\u592a\u4e00\u6837\u3002\u5b83\u901a\u8fc7\u7ee7\u627f ",r.a.createElement("code",null,"<WrappedComponent>")," \u6765\u5b9e\u73b0\uff0c\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7 ",r.a.createElement("code",null,"super")," \u6765\u987a\u5e8f\u8c03\u7528\u3002\u56e0\u4e3a\u4f9d\u8d56\u4e8e\u7ee7\u627f\u7684\u673a\u5236\uff0cHOC \u7684\u8c03\u7528\u987a\u5e8f\u548c\u961f\u5217\u662f\u4e00\u6837\u7684\uff1a"),r.a.createElement(o.a,{code:"didmount => HOC didmount => (HOCs didmount) => will unmount => HOC will unmount => (HOCs will unmount)\n",lang:"js"}),r.a.createElement("p",null,"\u5728\u53cd\u5411\u7ee7\u627f\u65b9\u6cd5\u4e2d\uff0c\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528\u539f\u7ec4\u4ef6 ",r.a.createElement("code",null,"<WrappedComponent>")," \u5f15\u7528\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u4f7f\u7528\u539f\u7ec4\u4ef6 ",r.a.createElement("code",null,"<WrappedComponent>")," \u7684 ",r.a.createElement("code",null,"state")," \u3001 ",r.a.createElement("code",null,"props")," \u3001\u751f\u547d\u5468\u671f\u548c ",r.a.createElement("code",null,"render")," \u65b9\u6cd5\u3002\u4f46\u5b83\u4e0d\u80fd\u4fdd\u8bc1\u5b8c\u6574\u7684\u5b50\u7ec4\u4ef6\u6811\u88ab\u89e3\u6790\u3002"),r.a.createElement("h3",{id:"\u6e32\u67d3\u52ab\u6301"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6e32\u67d3\u52ab\u6301"},r.a.createElement("span",{className:"icon icon-link"})),"\u6e32\u67d3\u52ab\u6301"),r.a.createElement("p",null,"\u6e32\u67d3\u52ab\u6301\u6307\u7684\u5c31\u662f\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u63a7\u5236\u539f\u7ec4\u4ef6 ",r.a.createElement("code",null,"<WrappedComponent>")," \u7684\u6e32\u67d3\u8fc7\u7a0b\uff0c\u5e76\u6e32\u67d3\u5404\u79cd\u5404\u6837\u7684\u7ed3\u679c\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5728\u4efb\u4f55 React \u5143\u7d20\u8f93\u51fa\u7684\u7ed3\u679c\u4e2d\u8bfb\u53d6\u3001\u589e\u52a0\u3001\u4fee\u6539\u3001\u5220\u9664 ",r.a.createElement("code",null,"props"),"\uff0c\u6216\u8bfb\u53d6\u6216\u4fee\u6539 React \u5143\u7d20\u6811\uff0c\u6216\u6761\u4ef6\u663e\u793a\u5143\u7d20\u6811\uff0c\u53c8\u6216\u662f\u7528\u6837\u5f0f\u63a7\u5236\u5305\u88f9\u5143\u7d20\u6811\u3002"),r.a.createElement("p",null,"\u6b63\u5982\u4e4b\u524d\u8bf4\u5230\u7684\uff0c\u53cd\u5411\u7ee7\u627f\u4e0d\u80fd\u4fdd\u8bc1\u5b8c\u6574\u7684\u5b50\u7ec4\u4ef6\u6811\u88ab\u89e3\u6790\uff0c\u8fd9\u610f\u5473\u7740\u5c06\u9650\u5236\u6e32\u67d3\u52ab\u6301\u529f\u80fd\u3002 \u6e32\u67d3\u52ab\u6301\u7684\u7ecf\u9a8c\u6cd5\u5219\u662f\u6211\u4eec\u53ef\u4ee5\u64cd\u63a7\u539f\u7ec4\u4ef6 ",r.a.createElement("code",null,"<WrappedComponent>")," \u7684\u5143\u7d20\u6811\uff0c\u5e76\u8f93\u51fa\u6b63\u786e\u7684\u7ed3\u679c\u3002\u4f46\u5982\u679c\u5143\u7d20\u6811\u4e2d\u5305\u62ec\u4e86\u51fd\u6570\u7c7b\u578b\u7684 React \u7ec4\u4ef6\uff0c\u5c31\u4e0d\u80fd\u64cd\u4f5c\u7ec4\u4ef6\u7684\u5b50\u7ec4\u4ef6\u3002"),r.a.createElement("h4",{id:"\u6761\u4ef6\u6e32\u67d3"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6761\u4ef6\u6e32\u67d3"},r.a.createElement("span",{className:"icon icon-link"})),"\u6761\u4ef6\u6e32\u67d3"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6761\u4ef6\u6e32\u67d3"),"\uff1a\u6839\u636e\u6761\u4ef6\uff0c\u6e32\u67d3\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a\u6761\u4ef6\u6e32\u67d3")),r.a.createElement(o.a,{code:"const MyContainer = WrappedComponent =>\n  class extends WrappedComponent {\n    render() {\n      if (this.props.loggedIn) {\n        return super.render();\n      } else {\n        return null;\n      }\n    }\n  };\n",lang:"js"}),r.a.createElement("h4",{id:"\u4fee\u6539\u6e32\u67d3"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4fee\u6539\u6e32\u67d3"},r.a.createElement("span",{className:"icon icon-link"})),"\u4fee\u6539\u6e32\u67d3"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u4fee\u6539\u6e32\u67d3"),"\uff1a\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u88ab\u5305\u88f9\u7ec4\u4ef6\u6e32\u67d3\u51fa\u7684 React \u5143\u7d20\u6811\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a\u4fee\u6539\u6e32\u67d3")),r.a.createElement(o.a,{code:"const MyContainer = WrappedComponent =>\n  class extends WrappedComponent {\n    render() {\n      const elementsTree = super.render();\n      let newProps = {};\n      if (elementsTree && elementsTree.type === 'input') {\n        newProps = { value: 'may the force be with you' };\n      }\n      const props = Object.assign({}, elementsTree.props, newProps);\n      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);\n      return newElementsTree;\n    }\n  };\n",lang:"js"}),r.a.createElement("h3",{id:"\u64cd\u4f5c\u72b6\u6001"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u64cd\u4f5c\u72b6\u6001"},r.a.createElement("span",{className:"icon icon-link"})),"\u64cd\u4f5c\u72b6\u6001"),r.a.createElement("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u8bfb\u53d6\u3001\u4fee\u6539\u6216\u5220\u9664\u539f\u7ec4\u4ef6 WrappedComponent \u5b9e\u4f8b\u4e2d\u7684 State\uff0c\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u589e\u52a0 State\u3002\u4f46\u8fd9\u6837\u505a\uff0c\u53ef\u80fd\u4f1a\u4f7f\u539f\u7ec4\u4ef6 WrappedComponent \u5185\u90e8\u72b6\u6001\u53d8\u5f97\u96be\u4ee5\u8ffd\u8e2a\uff0c\u4e0d\u6613\u7ef4\u62a4\u3002\u5927\u90e8\u5206\u7684\u9ad8\u9636\u7ec4\u4ef6\u90fd\u5e94\u8be5\u9650\u5236\u8bfb\u53d6\u6216\u589e\u52a0 State\uff0c\u5c24\u5176\u662f\u540e\u8005\uff0c\u53ef\u4ee5\u901a\u8fc7\u91cd\u65b0\u547d\u540d State\uff0c\u4ee5\u9632\u6b62\u6df7\u6dc6\u3002"),r.a.createElement(o.a,{code:"const MyContainer = WrappedComponent =>\n  class extends WrappedComponent {\n    render() {\n      return (\n        <div>\n          <h2>HOC Debugger Component</h2>\n          <p>Props</p>\n          <pre>{JSON.stringify(this.props, null, 2)}</pre>\n          <p>State</p>\n          <pre>{JSON.stringify(this.state, null, 2)}</pre>\n          {super.render()}\n        </div>\n      );\n    }\n  };\n",lang:"js"}),r.a.createElement("h2",{id:"\u5e94\u7528\u573a\u666f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5e94\u7528\u573a\u666f"},r.a.createElement("span",{className:"icon icon-link"})),"\u5e94\u7528\u573a\u666f"),r.a.createElement("h3",{id:"\u6743\u9650\u63a7\u5236"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6743\u9650\u63a7\u5236"},r.a.createElement("span",{className:"icon icon-link"})),"\u6743\u9650\u63a7\u5236"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6743\u9650\u63a7\u5236"),"\uff1a\u901a\u8fc7\u62bd\u8c61\u903b\u8f91\uff0c\u7edf\u4e00\u5bf9\u9875\u9762\u8fdb\u884c\u6743\u9650\u5224\u65ad\uff0c\u6309\u4e0d\u540c\u7684\u6761\u4ef6\u8fdb\u884c\u9875\u9762\u6e32\u67d3\u3002"),r.a.createElement(o.a,{code:"const auth = (WrappedComponent) => {\n    return class extends React.Component {\n        constructor(props){\n            super(props);\n            this.state = {\n                isAdmin: false\n            }\n        }\n        async componentWillMount(){\n            const currentRole = await getCurrentUserRole();\n            this.setState({\n                isAdmin: currentRole === 'Admin';\n            })\n        }\n        render(){\n            if(this.state.isAdmint){\n                return <WrapperdComponent {...this.props} />\n            } else {\n                return (<div>\u60a8\u6ca1\u6709\u6743\u9650\u67e5\u770b\u8be5\u9875\u9762\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\uff01</div>)\n            }\n        }\n    }\n}\n",lang:"js"}),r.a.createElement("h3",{id:"\u6027\u80fd\u76d1\u63a7"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6027\u80fd\u76d1\u63a7"},r.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80fd\u76d1\u63a7"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6027\u80fd\u76d1\u63a7"),"\uff1a\u5305\u88f9\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff0c\u8fdb\u884c\u7edf\u4e00\u57cb\u70b9\u3002"),r.a.createElement(o.a,{code:"const performance = WrappedComponent => {\n  return class extends WrappedComponent {\n    constructor(props) {\n      super(props);\n      this.start = Date.now();\n      this.end = 0;\n    }\n    componentDidMount() {\n      super.componentDidMount && super.componentDidMount();\n      this.end = Date.now();\n      console.log(`${WrappedComponent.name} \u7ec4\u4ef6\u6e32\u67d3\u65f6\u95f4\u4e3a ${this.end - this.state} ms`);\n    }\n    render() {\n      return super.render();\n    }\n  };\n};\n",lang:"js"}),r.a.createElement("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6ce8\u610f\u4e8b\u9879"},r.a.createElement("span",{className:"icon icon-link"})),"\u6ce8\u610f\u4e8b\u9879"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"\u7eaf\u51fd\u6570"),"\uff1a\u589e\u5f3a\u51fd\u6570\u5e94\u4e3a\u7eaf\u51fd\u6570\uff0c\u907f\u514d\u4fb5\u5165\u4fee\u6539\u5143\u7ec4\u4ef6\uff1b"),r.a.createElement("li",null,r.a.createElement("strong",null,"\u907f\u514d\u7528\u6cd5\u6c61\u67d3"),"\uff1a\u7406\u60f3\u72b6\u6001\u4e0b\uff0c\u5e94\u900f\u4f20\u5143\u7ec4\u4ef6\u7684\u65e0\u5173\u53c2\u6570\u4e0e\u4e8b\u4ef6\uff0c\u5c3d\u91cf\u4fdd\u8bc1\u7528\u6cd5\u4e0d\u53d8\uff1b"),r.a.createElement("li",null,r.a.createElement("strong",null,"\u547d\u540d\u7a7a\u95f4"),"\uff1a\u4e3a HOC \u589e\u52a0\u7279\u5f02\u7684\u7ec4\u4ef6\u540d\u79f0\uff0c\u8fd9\u6837\u80fd\u4fbf\u4e8e\u5f00\u53d1\u8c03\u8bd5\u548c\u67e5\u627e\u95ee\u9898\uff1b"),r.a.createElement("li",null,r.a.createElement("strong",null,"\u5f15\u7528\u4f20\u9012"),"\uff1a\u5982\u679c\u9700\u8981\u4f20\u9012\u5143\u7ec4\u4ef6\u7684 refs \u5f15\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528 ",r.a.createElement("code",null,"React.forwardRef"),"\uff1b"),r.a.createElement("li",null,r.a.createElement("strong",null,"\u9759\u6001\u65b9\u6cd5"),"\uff1a\u5143\u7ec4\u4ef6\u4e0a\u7684\u9759\u6001\u65b9\u6cd5\u5e76\u65e0\u6cd5\u88ab\u81ea\u52a8\u4f20\u51fa\uff0c\u4f1a\u5bfc\u81f4\u4e1a\u52a1\u5c42\u65e0\u6cd5\u8c03\u7528\uff0c\u56e0\u6b64\u9700\u8981\u901a\u8fc7\u51fd\u6570\u5bfc\u51fa\u6216\u8005\u9759\u6001\u65b9\u6cd5\u8d4b\u503c\u4e24\u79cd\u65b9\u6cd5\u89e3\u51b3\uff1b"),r.a.createElement("li",null,r.a.createElement("strong",null,"\u91cd\u65b0\u6e32\u67d3"),"\uff1a\u7531\u4e8e\u589e\u5f3a\u51fd\u6570\u6bcf\u6b21\u8c03\u7528\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7ec4\u4ef6\uff0c\u56e0\u6b64\u5982\u679c\u5728 Render \u4e2d\u4f7f\u7528\u589e\u5f3a\u51fd\u6570\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u90fd\u91cd\u65b0\u6e32\u67d3\u6574\u4e2a HOC\uff0c\u800c\u4e14\u4e4b\u524d\u7684\u72b6\u6001\u4f1a\u4e22\u5931\uff1b")),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://juejin.im/post/5c92f499f265da612647b754",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u4e2d\u9ad8\u7ea7\u524d\u7aef\u5927\u5382\u9762\u8bd5\u79d8\u7c4d",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://juejin.im/post/5b837692f265da434015865a",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u4ece 0 \u5230 1 \u5b9e\u73b0 React \u7cfb\u5217\u2014\u2014 HOC \u63a2\u79d8",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://zhuanlan.zhihu.com/p/49485308",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u6df1\u5165\u7406\u89e3 React \u9ad8\u9636\u7ec4\u4ef6",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);
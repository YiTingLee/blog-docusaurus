"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={id:"kubernetes-pod-management",title:"Kubernetes\u7cfb\u5217\u6587 - Pod\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e8c)",description:"\u804a\u804aKubernetes\u7684\u62bd\u8c61\u5143\u4ef6",slug:"pod-management",date:"2022-09-11T02:00:00.000+0800",template:"post",draft:!1,category:"Kubernetes",tags:["Kubernetes"],socialImage:""},l=void 0,i={unversionedId:"Kubernetes/kubernetes-pod-management",id:"Kubernetes/kubernetes-pod-management",title:"Kubernetes\u7cfb\u5217\u6587 - Pod\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e8c)",description:"\u804a\u804aKubernetes\u7684\u62bd\u8c61\u5143\u4ef6",source:"@site/docs/Kubernetes/10-Kubernetes-Pod-Management.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/pod-management",permalink:"/Kubernetes/pod-management",draft:!1,tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"}],version:"current",lastUpdatedAt:1662916077,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:10,frontMatter:{id:"kubernetes-pod-management",title:"Kubernetes\u7cfb\u5217\u6587 - Pod\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e8c)",description:"\u804a\u804aKubernetes\u7684\u62bd\u8c61\u5143\u4ef6",slug:"pod-management",date:"2022-09-11T02:00:00.000+0800",template:"post",draft:!1,category:"Kubernetes",tags:["Kubernetes"],socialImage:""},sidebar:"defaultSidebar",previous:{title:"Kubernetes\u7cfb\u5217\u6587 - \u57fa\u790e\u5143\u4ef6\u4ecb\u7d39 (\u4e00)",permalink:"/Kubernetes/kubernetes-intro"},next:{title:"Kubernetes\u7cfb\u5217\u6587 - Service\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e09)",permalink:"/Kubernetes/service-component"}},p={},s=[{value:"Container \u57fa\u672c\u4ecb\u7d39",id:"container-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"Docker \u7684\u5e95\u5c64\u600e\u9ebc\u505a\u5230\u9019\u4e9b\u4e8b?",id:"docker-\u7684\u5e95\u5c64\u600e\u9ebc\u505a\u5230\u9019\u4e9b\u4e8b",level:4},{value:"Pod \u57fa\u672c\u4ecb\u7d39",id:"pod-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"Multi Conatiners \u7684\u4f8b\u5b50",id:"multi-conatiners-\u7684\u4f8b\u5b50",level:4},{value:"\u6709 Container \u70ba\u4ec0\u9ebc\u9700\u8981 Pod",id:"\u6709-container-\u70ba\u4ec0\u9ebc\u9700\u8981-pod",level:2},{value:"\u5982\u4f55\u6b63\u78ba\u8a2d\u8a08 Pod",id:"\u5982\u4f55\u6b63\u78ba\u8a2d\u8a08-pod",level:2},{value:"Replication Controller \u57fa\u672c\u4ecb\u7d39",id:"replication-controller-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"ReplicaSet \u57fa\u672c\u4ecb\u7d39",id:"replicaset-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"ReplicaSet vs Replication Controller Label Selector",id:"replicaset-vs-replication-controller-label-selector",level:4},{value:"Deployment \u57fa\u672c\u4ecb\u7d39",id:"deployment-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"Deployment \u7b56\u7565\u4ecb\u7d39",id:"deployment-\u7b56\u7565\u4ecb\u7d39",level:2},{value:"Rolling Update Strategy (Zero-downtime)",id:"rolling-update-strategy-zero-downtime",level:4},{value:"Recreate",id:"recreate",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],d={toc:s};function c(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\u6211\u5011\u6703\u804a\u5230"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Container \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("li",{parentName:"ul"},"Pod \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("li",{parentName:"ul"},"\u6709 Container \u70ba\u4ec0\u9ebc\u9700\u8981 Pod"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6b63\u78ba\u8a2d\u8a08 Pod"),(0,r.kt)("li",{parentName:"ul"},"Replication Controller \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("li",{parentName:"ul"},"ReplicaSet \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("li",{parentName:"ul"},"Deployment \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("li",{parentName:"ul"},"Deployment \u7b56\u7565\u4ecb\u7d39")),(0,r.kt)("h2",{id:"container-\u57fa\u672c\u4ecb\u7d39"},"Container \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("p",null,"2022 \u7684\u4eca\u5929 Container \u8207 Docker \u57fa\u672c\u4e0a\u5df2\u7d93\u662f\u5f8c\u7aef\u5de5\u7a0b\u5e2b\u57fa\u672c\u5fc5\u5099\u7684\u6280\u80fd\uff0c\u7121\u8ad6\u662f\u5728\u958b\u767c\u7684\u672c\u5730\u7aef\u6216\u662f\u7522\u54c1\u7aef\u90fd\u6703\u770b\u5230 Container\n\u7684\u8eab\u5f71\u3002Container \u7684\u672c\u8cea\u5c31\u662f\u4e00\u500b\u7368\u7acb\u74b0\u5883\u7684 Process\uff0c\u63db\u53e5\u8a71\u8aaa Container \u662f\u4e00\u500b\u64c1\u6709\u81ea\u5df1\u7684\u7db2\u8def\u8207 File System \u4e26\u4e14\u4e0d\u53d7\u5176\u4ed6 Process \u5e72\u64fe\u7684\u4e00\u500b Process\uff0c\u900f\u904e\u9019\u4e9b\u7279\u6027\u80fd\u4f7f\u958b\u767c\u8005\u5728\u64cd\u4f5c Container \u6642\u611f\u89ba\u50cf\u5728 VM \u5167\u64cd\u4f5c\u4e00\u6a23\u3002"),(0,r.kt)("h4",{id:"docker-\u7684\u5e95\u5c64\u600e\u9ebc\u505a\u5230\u9019\u4e9b\u4e8b"},"Docker \u7684\u5e95\u5c64\u600e\u9ebc\u505a\u5230\u9019\u4e9b\u4e8b?"),(0,r.kt)("p",null,"Docker \u5229\u7528 Linux \u7684\u5169\u5927\u6838\u5fc3\u6280\u8853\u5b8c\u6210 Conatiner \u7684\u5be6\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker Core",src:t(4103).Z,width:"510",height:"426"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace: \u7528\u4f86\u963b\u9694 Process \u7684\u74b0\u5883\uff0c\u4e0d\u540c Namespace \u4e0b\u7684 Process \u4e0d\u80fd\u4e92\u76f8\u8b80\u53d6 Process \u5167\u7684\u8cc7\u6e90\uff0c\u4e14\u90fd\u53ef\u4ee5\u6709\u7368\u7acb\u7684\u8cc7\u6e90(\u5982 User \u6216 Pid \u7b49)\u3002\u9019\u908a\u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u500b Container \u5176\u5be6\u5c31\u662f\u4e00\u500b\u6709\u81ea\u5df1 Namespace \u7684 Process\u3002Linux \u4e3b\u8981\u63d0\u4f9b\u4e86\u516d\u7a2e Namespace\uff0cUser\u3001Mint\u3001Network\u3001UTS\u3001IPC\u3001PID\u3002"),(0,r.kt)("li",{parentName:"ul"},"Cgroup: \u7528\u4f86\u9650\u5236\u8a72 Namespace \u4e0b\u7684\u6240\u6709 Process \u7e3d\u5171\u53ef\u4ee5\u4f7f\u7528\u591a\u5c11 CPU\u3001Memory \u7b49\u3002\u8209\u500b\u4f8b\u5b50\uff0c\u5728 Docker \u4e4b\u524d Cgroup \u6700\u5e38\u7528\u4f86\u9650\u5236\u67d0\u500b Process \u53ef\u80fd\u53ea\u80fd\u8dd1\u5230 90%\u7684 CPU \u8cc7\u6e90\uff0c\u624d\u4e0d\u6703\u5c0e\u81f4\u4e00\u500b Process \u6436\u4e86\u6240\u6709 CPU \u8cc7\u6e90\u800c\u9020\u6210\u6240\u6709\u670d\u52d9\u90fd\u7121\u6cd5\u6b63\u5e38\u4f7f\u7528\u7684\u554f\u984c\u3002")),(0,r.kt)("admonition",{title:"\u5371\u96aa\u767c\u8a00",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u65bc\u90fd\u662f\u4f7f\u7528 Linux \u6838\u5fc3\u6280\u8853\uff0c\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc Windows \u73fe\u5728\u4f7f\u7528 WSL (Windows Subsystem for Linux) \u624d\u80fd\u6709\u8f03\u5b8c\u6574\u7684 Docker \u652f\u63f4\u7684\u539f\u56e0\u3002")),(0,r.kt)("h2",{id:"pod-\u57fa\u672c\u4ecb\u7d39"},"Pod \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("p",null,"Pod \u662f Kubernetes \u74b0\u5883\u4e2d Application \u904b\u884c\u7684\u6700\u5c0f\u55ae\u4f4d\uff0c\u57fa\u672c\u4e0a Pod \u5c31\u662f Container \u7684\u96c6\u5408\uff0c\u4e5f\u5c31\u662f\u8aaa\u4e00\u500b Pod \u61c9\u8a72\u6700\u5c11\u5305\u542b\u4e00\u500b\u6216\u591a\u500b Container\u3002\u63a5\u8457\u6211\u5011\u4f86\u770b Pod \u6709\u54ea\u4e9b\u7279\u6027\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u500b Pod \u5c0d\u61c9\u5230\u7684\u662f\u4e00\u500b Application"),(0,r.kt)("li",{parentName:"ul"},"Pod \u5167\u7684 Container \u90fd\u4e00\u5b9a\u6703\u8dd1\u5728\u540c\u4e00\u500b Node \u4e0a (Kubernetes \u6700\u5c0f\u90e8\u7f72\u55ae\u4f4d\u5c31\u662f Pod)"),(0,r.kt)("li",{parentName:"ul"},"Pod \u5167\u7684 Container \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 localhost \u6e9d\u901a (\u5171\u7528\u540c\u4e00\u7d44 Linux Namespace)"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u91dd\u5c0d Pod \u5167\u90e8\u7684 Container \u500b\u5225\u8a2d\u5b9a\u6bcf\u500b Container \u53ef\u4f7f\u7528\u7684\u786c\u9ad4\u8cc7\u6e90 (CPM/Memory) (\u539f\u7406\u900f\u904e Cgroup \u5be6\u73fe)"),(0,r.kt)("li",{parentName:"ul"},"Pod \u5167\u7684 Container \u5171\u7528\u76f8\u540c\u7684\u7db2\u8def\u8207 Volume"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684 Pod \u4e4b\u9593\u90fd\u662f\u7368\u7acb\u7684\u904b\u884c\u74b0\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc Pod \u5141\u8a31\u591a\u500b Container \u6240\u4ee5\u975e\u5e38\u9069\u5408 Sidecar Pattern")),(0,r.kt)("h4",{id:"multi-conatiners-\u7684\u4f8b\u5b50"},"Multi Conatiners \u7684\u4f8b\u5b50"),(0,r.kt)("p",null,"\u9019\u500b\u4f8b\u5b50 api-server \u9019\u500b Pod \u5167\u5171\u6709\u5169\u500b container (\u9019\u662f\u4e00\u500b\u6a19\u6e96\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar"},"Sidecar Pattern")," \u7684\u4f8b\u5b50)\u3002\u9019\u500b Pod \u7e3d\u5171\u8981\u6c42(request)\u4e86 0.5cpu \u8207 128Mib Memory\uff0c\u6700\u591a(limit)\u5230 1 cpu \u8207 256 Mib Memory\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: api-server\nspec:\n  containers:\n    - name: api-sever\n      image: image/api-server:v1\n      resources:\n        requests:\n          memory: "64Mi"\n          cpu: "250m"\n        limits:\n          memory: "128Mi"\n          cpu: "500m"\n    - name: log-aggregator\n      image: image/log-aggregator:v2\n      resources:\n        requests:\n          memory: "64Mi"\n          cpu: "250m"\n        limits:\n          memory: "128Mi"\n          cpu: "500m"\n')),(0,r.kt)("h2",{id:"\u6709-container-\u70ba\u4ec0\u9ebc\u9700\u8981-pod"},"\u6709 Container \u70ba\u4ec0\u9ebc\u9700\u8981 Pod"),(0,r.kt)("p",null,"\u4e0d\u77e5\u9053\u5927\u5bb6\u6709\u6c92\u6709\u60f3\u904e\u9019\u500b\u554f\u984c\uff0cKubernetes \u70ba\u4ec0\u9ebc\u4e0d\u4f7f\u7528 Container \u505a\u70ba Application \u7684\u6700\u5c0f\u55ae\u4f4d\uff0c\u800c\u662f\u7528 Pod \u5728\u5c0d Container \u9032\u884c\u4e00\u5c64\u5c01\u88dd\u3002\u5728 Production \u74b0\u5883\u4e2d\u6211\u5011\u540c\u6642\u90fd\u6703\u904b\u884c\u8a31\u591a\u7684 Worker Node\uff0c\u5e38\u5e38\u6703\u6709\u95dc\u4fc2\u5f88\u7dca\u5bc6\u7684 Container \u51fa\u73fe\uff0c\u800c\u9019\u4e9b Container \u90fd\u6703\u9700\u8981\u8dd1\u5728\u540c\u4e00\u53f0 Worker Node \u4e0a\uff0c\u5982\u679c\u6c92\u6709 Pod \u7684\u60c5\u6cc1\u4e0b\uff0c\u6240\u4ee5 Kubernetes \u5c31\u5fc5\u9808\u8981\u91dd\u5c0d\u9019\u4e9b\u60c5\u6cc1\u9032\u884c\u7279\u5225\u7684\u8abf\u5ea6\u3002"),(0,r.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\u6211\u5011\u76ee\u524d\u6709\u5169\u500b\u95dc\u4fc2\u7dca\u5bc6\u7684 ContainerA \u8207 ContainerB \u9700\u8981\u88ab\u653e\u5230 NodeA \u5167\u57f7\u884c\u3002\u9019\u5169\u500b Container \u5404\u9700\u8981 0.5 CPU (\u7e3d\u5171 1 CPU)\u7684\u786c\u9ad4\u8cc7\u6e90\uff0c\u800c NodeA \u53ea\u5269\u4e0b 0.5 CPU \u53ef\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\u6211\u5011\u6703\u628a ContainerB \u8a2d\u5b9a\u6210 ContainerA \u7684 Dependency\uff0c\u8b93\u8abf\u5ea6\u8005\u53ef\u4ee5\u77e5\u9053 Container AB \u9700\u8981\u8dd1\u5728\u540c\u4e00\u500b Node \u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"ContainerA \u6703\u88ab\u8abf\u5ea6\u5230 NodeA \u4e0a\u53bb\u904b\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u8457\u6703\u767c\u73fe NodeA \u4e0a\u5df2\u7d93\u6c92\u6709\u8cc7\u6e90\u53ef\u4ee5\u8dd1 ContainerB \u4e86\uff0c\u4f46 ContainerB \u53c8\u53ea\u80fd\u8dd1\u5728 NodeA \u4e0a\u3002")),(0,r.kt)("p",null,"\u63a5\u8457\u5c31\u6703\u5fc5\u9808\u9762\u81e8\u5c37\u5c2c\u7684\u72c0\u614b\u4e86\u3002\u4f60\u53ef\u80fd\u6703\u60f3\u8aaa\u90a3\u6211\u5c31\u628a\u6709 Dependency \u7684 Container \u770b\u6210\u662f\u4e00\u9ad4\u5c31\u53ef\u4ee5\u89e3\u6c7a\u9019\u500b\u554f\u984c\u4e86\uff0c\u5c0d\uff0c\u6240\u4ee5 Kubernetes \u5c31\u767c\u660e\u4e86 Pod\uff01"),(0,r.kt)("h2",{id:"\u5982\u4f55\u6b63\u78ba\u8a2d\u8a08-pod"},"\u5982\u4f55\u6b63\u78ba\u8a2d\u8a08 Pod"),(0,r.kt)("p",null,"\u63a5\u8457\u6211\u5011\u4f86\u8a0e\u8ad6\u5982\u4f55\u6b63\u78ba\u7684\u8a2d\u8a08 Pod\uff0c\u518d\u6b21\u63d0\u9192\u7121\u8ad6 Pod \u662f\u7531\u4e00\u500b\u9084\u662f\u591a\u500b Container \u7d44\u6210\uff0c\u6211\u5011\u61c9\u8a72\u90fd\u8981\u628a Pod \u60f3\u50cf\u6210\u662f\u4e00\u500b Application \u3002\u8a2d\u8a08 Pod \u7684\u6642\u5019\uff0c\u6211\u5011\u53ef\u4ee5\u5148\u8003\u616e\u4e00\u4e0b\u5e7e\u500b\u5c64\u9762\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pod \u5167\u90e8\u7684 Container \u662f\u4e0d\u662f\u5171\u751f\u95dc\u4fc2(\u662f\u7684\u8a71\u5c31\u5fc5\u9808\u8a2d\u8a08\u6210\u540c\u4e00\u500b Pod)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 log-aggregator \u9019\u7a2e\u9700\u8981\u4f9d\u9760\u5176\u4ed6 Process \u7684\u670d\u52d9\u5c31\u4e0d\u8a72\u81ea\u5df1\u5b58\u5728"))),(0,r.kt)("li",{parentName:"ul"},"\u5f9e Scaling \u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u6703\u4e0d\u6703\u9019\u5169\u500b Container \u9700\u8981\u4e00\u8d77\u88ab Scale(\u662f\u7684\u8a71\u5c31\u5fc5\u9808\u8a2d\u8a08\u6210\u540c\u4e00\u500b Pod)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 api-server \u8207 redis \u5c31\u4e0d\u8a72\u4e00\u8d77\u88ab Scale"))),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u540c\u7684\u4e3b\u6a5f\u5206\u5225\u8dd1\u5169\u500b Container\uff0c\u900f\u904e\u7db2\u8def\u6e9d\u901a\u7684\u65b9\u5f0f\u80fd\u4e0d\u80fd\u6b63\u5e38\u904b\u4f5c(\u4e0d\u662f\u7684\u8a71\u5c31\u5fc5\u9808\u8a2d\u8a08\u6210\u540c\u4e00\u500b Pod)")),(0,r.kt)("admonition",{title:"My Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u9019\u908a\u53ea\u662f\u63d0\u4f9b\u4e00\u4e9b\u5bb9\u6613\u601d\u8003\u7684\u65b9\u5411\uff0c\u6b63\u78ba\u7684\u8a2d\u8a08\u9084\u662f\u5fc5\u9808\u7531\u771f\u5be6\u74b0\u5883\u8207\u908f\u8f2f\u53bb\u5224\u65b7\u3002")),(0,r.kt)("h2",{id:"replication-controller-\u57fa\u672c\u4ecb\u7d39"},"Replication Controller \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u5c0d Kubernetes \u8981\u6c42\u5efa\u7acb\u4e00\u500b Pod \u4e4b\u5f8c\uff0cKubernetes \u6703\u5e6b\u6211\u5011\u628a Pod \u8dd1\u5728 Cluster \u4e2d\u7684\u5176\u4e2d\u4e00\u500b Node\uff0c\u63a5\u8457\u5982\u679c Node \u51fa\u73fe\u610f\u5916\u58de\u6389\u5f8c\uff0cPod \u5c31\u6703\u8ddf\u8457\u88ab\u95dc\u9589\uff0c\u7136\u5f8c\u5c31\u6c92\u6709\u7136\u5f8c\u4e86\u3002Pod \u53ea\u662f\u898f\u7bc4\u4e00\u500b Application \u7d44\u6210\u7684\u5143\u4ef6\uff0cPod \u5143\u4ef6\u4e26\u6c92\u6709\u4fdd\u8b49\u4efb\u4f55\u904b\u884c\u72c0\u614b\uff0c\u4e5f\u6c92\u8fa6\u6cd5\u540c\u6642 Scale \u591a\u500b\u76f8\u540c\u7684 Pod\u3002"),(0,r.kt)("p",null,"Replication Controller (\u7c21\u7a31 RC)\u662f\u7528\u4f86\u7ba1\u7406 Pod\uff0cRC \u4fdd\u8b49 Pod \u904b\u884c\u7684\u6578\u91cf\u4e00\u5b9a\u6703\u8207\u4f7f\u7528\u8005\u5b9a\u7fa9\u7684\u76f8\u540c\uff0c\u4e5f\u5c31\u662f\u8aaa\u7576\u610f\u5916\u767c\u751f Pod \u7a81\u7136\u88ab\u7d42\u6b62\u6642\uff0cRC \u6703\u555f\u52d5\u4e00\u500b Pod \u4f86\u4fdd\u8b49\u6578\u91cf\u76f8\u540c\uff0c\u53cd\u4e4b\u591a\u51fa\u4f86\u7684 Pod \u5247\u6703\u88ab RC \u522a\u6389\u3002\u7531\u65bc\u9019\u500b\u7279\u6027\uff0c\u5118\u7ba1\u9700\u6c42\u53ea\u9700\u8981\u5efa\u7acb\u4e00\u500b Pod\uff0c\u6211\u5011\u90fd\u61c9\u8a72\u4f7f\u7528 RC \u6216 Deployment \u4ee3\u70ba\u7ba1\u7406\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u555f\u52d5 Pod\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: ReplicationController\nmetadata:\n  name: nginx\nspec:\n  replicas: 3 # RC\u4fdd\u8b49\u7684Pod\u6578\u91cf\n  selector:\n    app: nginx\n  template:\n    metadata:\n      name: nginx\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("admonition",{title:"Replication Controller \u5df2\u88ab Deployment \u53d6\u4ee3",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u96d6\u7136\u73fe\u5728\u5df2\u7d93\u6c92\u4ec0\u9ebc\u4eba\u76f4\u63a5\u64cd\u4f5c RC\uff0c\u5927\u90e8\u5206\u90fd\u6539\u6210 Deployment \u4f86\u7ba1\u7406\uff0c\u4f46 RC \u9084\u6c92\u6709\u88ab Kubernetes \u68c4\u7528\uff0c\u6240\u4ee5\u6211\u5011\u9084\u662f\u9700\u8981\u6709\u4e00\u4e9b\u57fa\u672c\u7684\u4e86\u89e3\u3002")),(0,r.kt)("h2",{id:"replicaset-\u57fa\u672c\u4ecb\u7d39"},"ReplicaSet \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("p",null,"ReplicaSet \u662f\u65b0\u4e00\u4ee3\u88ab Kubernetes \u8a2d\u8a08\u51fa\u4f86\u7684\u5143\u4ef6\u3002\u8207 RC \u4e00\u6a23\u662f\u7528\u4f86\u7ba1\u7406 Pod \u904b\u884c\u7684\u6578\u91cf\uff0c\u57fa\u672c\u4e0a ReplicaSet \u8207 RC \u672c\u8cea\u4e0a\u5c31\u662f\u4e00\u6a23\u7684\u6771\u897f\uff0c\u60f3\u89e3\u6c7a\u7684\u554f\u984c\u4e5f\u76f8\u540c\uff0c\u88ab\u958b\u767c\u51fa\u4f86\u7684\u76ee\u7684\u5c31\u662f\u62ff\u4f86\u53d6\u4ee3 RC\u3002\u6700\u5927\u7684\u5dee\u7570\u6709\u4ee5\u4e0b\u5169\u9ede\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u4e0a\u4e0d\u6703\u624b\u52d5\u5efa\u7acb\uff0c\u7531 Deployment \u4ee3\u70ba\u5efa\u7acb"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u63f4\u66f4\u5f48\u6027\u7684 Label Selector (\u6211\u5011\u4e0b\u4e00\u7bc7\u6703\u8a73\u7d30\u8a0e\u8ad6 Label)")),(0,r.kt)("h4",{id:"replicaset-vs-replication-controller-label-selector"},"ReplicaSet vs Replication Controller Label Selector"),(0,r.kt)("p",null,"RC \u50c5\u652f\u63f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n....\nselector:\n  app: nginx\n....\n")),(0,r.kt)("p",null,"ReplicaSet \u652f\u63f4\u66f4\u5f48\u6027\u7684 Label Selector\uff0c\u53ea\u8981\u7b26\u5408 matchExpressions \u7684 Pod \u90fd\u6703\u88ab ReplicaSet \u7d0d\u5165\u7ba1\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n....\nselector:\n  matchLabel:\n    app: nigix\n  matchExpressions:\n    - key: component\n      operator: In\n      values:\n        - frontend\n....\n")),(0,r.kt)("admonition",{title:"My Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Kubernetes \u5b98\u65b9\u5efa\u8b70\u4f7f\u7528 ReplicaSet \u53d6\u4ee3 Replication Controller\u3002",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#alternatives-to-replicationcontroller"},"Reference"))),(0,r.kt)("h2",{id:"deployment-\u57fa\u672c\u4ecb\u7d39"},"Deployment \u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("p",null,"\u6211\u5011\u73fe\u5728\u6709\u4e86 ReplicaSet \u5e6b\u6211\u5011\u7ba1\u7406 Pod \u7684\u6578\u91cf\uff0c\u4f46\u4ee5\u7522\u54c1\u7b49\u7d1a\u7684\u90e8\u7f72\u9700\u6c42\u4f86\u8aaa\u9084\u662f\u9060\u9060\u4e0d\u5920\u3002\u5728 DevOps \u90e8\u7f72\u8b70\u984c\u4e2d Rollout \u8207 Rollback \u4e00\u76f4\u90fd\u662f\u975e\u5e38\u71b1\u9580\u7684\u554f\u984c\uff0c\u6700\u982d\u75db\u7684\u554f\u984c\u4e0d\u5916\u4e4e\u5c31\u662f\u7cfb\u7d71\u5347\u7d1a\u4e2d\u6703\u4e0d\u6703\u9700\u8981\u505c\u6a5f\u7684\u554f\u984c\u3002\u7528\u4e86 Kubernetes \u5f8c\u9019\u4e9b\u554f\u984c\u90fd\u8fce\u5203\u800c\u89e3\uff0cDeployment \u90fd\u5e6b\u4f60\u5b8c\u6210\uff0c\u800c\u4e14\u4e5f\u4e0d\u9700\u8981\u4ec0\u9ebc\u8907\u96dc\u7684\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,"Deployment \u662f\u4e00\u500b\u66f4\u9ad8\u968e\u7684\u62bd\u8c61\u5143\u4ef6\uff0c\u900f\u904e ReplicaSet \u63d0\u4f9b Pod Scaling \u7684\u529f\u80fd\uff0c\u4e14\u984d\u5916\u63d0\u4f9b\u90e8\u7f72\u76f8\u95dc\u7684\u529f\u80fd\u3002\u6211\u5011\u4f86\u770b Deployment \u5230\u5e95\u5e6b\u5fd9\u505a\u4e86\u54ea\u4e9b\u4e8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b Pod \u7ba1\u7406\u8207 Pod Scaling \u529f\u80fd (\u900f\u904e ReplicaSet)"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7248\u672c\u7684\u6b77\u53f2\uff0c\u4ee5\u4fbf\u5feb\u901f\u56de\u5230\u5148\u524d\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e0d\u540c\u7b56\u7565\u7684\u90e8\u7f72\u65b9\u5f0f\u7684 rollout \u8207 rollback")),(0,r.kt)("h2",{id:"deployment-\u7b56\u7565\u4ecb\u7d39"},"Deployment \u7b56\u7565\u4ecb\u7d39"),(0,r.kt)("p",null,"Deployment \u4e3b\u8981\u63d0\u4f9b\u5169\u7a2e\u5e38\u898b\u7684\u90e8\u7f72\u7b56\u7565\u3002"),(0,r.kt)("h4",{id:"rolling-update-strategy-zero-downtime"},"Rolling Update Strategy (Zero-downtime)"),(0,r.kt)("p",null,"Rolling Update \u662f\u4e00\u500b Zero-downtime \u7684\u7b56\u7565\uff0c\u7b56\u7565\u4e0a\u5c31\u662f\u7d42\u6b62\u90e8\u5206\u820a\u7248\u672c\u7684 Pod \u4e26\u540c\u6642\u555f\u52d5\u65b0\u7684 Pod\uff0c\u4e26\u5c07\u6d41\u91cf\u6162\u6162\u5207\u5230\u65b0\u7248\u672c\u7684 Pod \u4e0a\uff0c\u91cd\u8907\u9019\u500b\u884c\u70ba\u76f4\u5230 rollout \u5b8c\u6210\u3002\u6211\u5011\u7528\u5169\u500b Pod1 \u8207 Pod2 \u8981\u63db\u5230\u5169\u500b\u65b0\u7248\u672c\u7684 Pod3 \u8207 Pod4 \u4f86\u8209\u4f8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5716 1: Pod 1 \u8207 Pod2 \u6b63\u5e38\u7684\u904b\u884c\u5728 Node \u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u5716 2: \u505c\u6b62 Pod2 \u4e26\u540c\u6642\u555f\u52d5 Pod3 (\u6d41\u91cf\u53ea\u6709\u6253\u5230 Pod1)"),(0,r.kt)("li",{parentName:"ul"},"\u5716 3: Pod3 \u6b63\u5e38\u904b\u4f5c\u5f8c\u5c07\u6d41\u91cf\u540c\u6642\u6253\u5165 Pod1 \u8207 Pod3 (\u9019\u6642 Pod1 \u8207 Pod3 \u662f\u4e0d\u540c\u7248\u672c\uff0c\u9019\u908a\u9700\u8981\u7279\u5225\u6ce8\u610f\u7248\u672c\u4e0a\u662f\u5426\u5411\u524d\u76f8\u5bb9\u554f\u984c)"),(0,r.kt)("li",{parentName:"ul"},"\u5716 4: \u505c\u6b62 Pod 1 \u4e26\u540c\u6642\u555f\u52d5 Pod4 (\u6d41\u91cf\u53ea\u6709\u6253\u5230 Pod3)"),(0,r.kt)("li",{parentName:"ul"},"\u5716 5: Pod4 \u6b63\u5e38\u904b\u4f5c\u5f8c\u5c31 rollout \u5b8c\u6210\uff01(\u6d41\u91cf\u540c\u6642\u6253\u5165 Pod3 \u8207 Pod4)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rolling Update",src:t(7626).Z,width:"875",height:"795"})),(0,r.kt)("p",null,"\u9644\u4e0a\u4e00\u500b\u7c21\u55ae\u7684 Rolling Update \u7684 yaml \u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  minReadySeconds: 5 # Pod ready\u5f8c\u7b49\u5f855\u5206\u9418\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1 # \u6700\u591a\u53ef\u4ee5\u5efa\u51fa\u591a\u5c11"\u984d\u5916"\u526f\u672c\n      maxUnavailable: 1 # \u6700\u591a\u53ef\u4ee5\u540c\u6642\u505c\u6b62\u591a\u5c11Pod\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx\n          ports:\n            - containerPort: 80\n')),(0,r.kt)("h4",{id:"recreate"},"Recreate"),(0,r.kt)("p",null,"Recreate \u662f\u4e00\u500b\u6703\u6709\u77ed\u66ab downtime \u7684\u7b56\u7565\uff0c\u7b56\u7565\u4e0a\u5c31\u662f\u628a\u76ee\u524d\u6240\u6709\u820a\u7248\u672c\u7684 Pod \u90fd\u95dc\u6389\uff0c\u4e26\u555f\u52d5\u65b0\u7248\u672c\u7684 Pod\uff0c\u4f46\u555f\u52d5\u65b0\u7248\u672c Pod \u7684\u6642\u9593\u5c31\u662f\u8a72 rollout \u7684 downtime \u6642\u9593\u3002Recreate \u7684\u512a\u9ede\u5c31\u662f\u901f\u5ea6\u5f88\u5feb\uff0c\u4e0d\u7528\u50cf RollingUpdate \u9019\u6a23\u6162\u6162\u5207\u63db\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Recreate",src:t(1715).Z,width:"875",height:"505"})),(0,r.kt)("p",null,"\u9644\u4e0a\u4e00\u500b\u7c21\u55ae\u7684 Recreate \u7684 yaml \u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("p",null,"\u57fa\u672c\u4e0a Kubernetes \u5c31\u662f\u4e00\u500b\u863f\u83e0\u4e00\u500b\u5751\uff0c\u9047\u5230\u4e0d\u540c\u9700\u6c42\u7684\u6642\u5019\u57fa\u672c\u4e0a Kubernetes \u90fd\u6703\u6709\u76f8\u5c0d\u61c9\u7684\u5143\u4ef6\u53ef\u4ee5\u4f7f\u7528\u3002\u6211\u5011\u6162\u6162\u53ef\u4ee5\u770b\u5f97\u51fa\u4f86 Kubernetes \u60f3\u5e6b\u5fd9\u8655\u7406\u6240\u6709\u8ddf\u6a5f\u5668\u8207\u90e8\u7f72\u4e0a\u6240\u6709\u7e41\u7463\u7684\u4e8b\uff0c\u9019\u7bc7\u6587\u7ae0\u4e2d\u63d0\u5230\u7684 Deployment \u5c31\u5e6b\u5fd9\u89e3\u6c7a\u4e86\u5927\u90e8\u5206\u90e8\u7f72\u6703\u9047\u5230\u7684\u554f\u984c\u3002\u4e4b\u5f8c\u7684\u6587\u7ae0\u6703\u63d0\u5230\u66f4\u591a\u7684\u62bd\u8c61\u5143\u4ef6\uff01"))}c.isMDXComponent=!0},4103:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docker_core-5bc944cb78e162352d71e011fa8c5f6c.png"},1715:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/recreate-03228a7d88465e59cc136642a1f31cdf.png"},7626:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/rollingupdate-eb7666af83ef50718b8768afcbcb25f7.png"}}]);
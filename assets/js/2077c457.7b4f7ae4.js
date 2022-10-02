"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,m=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={id:"kubernetes-service",title:"Kubernetes\u7cfb\u5217\u6587 - Service\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e09)",description:"\u804a\u804aKubernetes Service\u76f8\u95dc\u7684\u62bd\u8c61\u5143\u4ef6",slug:"service-component",date:"2022-09-19T02:00:00.000+0800",template:"post",draft:!1,category:"Kubernetes",tags:["Kubernetes","Network"],socialImage:""},o=void 0,i={unversionedId:"Kubernetes/kubernetes-service",id:"Kubernetes/kubernetes-service",title:"Kubernetes\u7cfb\u5217\u6587 - Service\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e09)",description:"\u804a\u804aKubernetes Service\u76f8\u95dc\u7684\u62bd\u8c61\u5143\u4ef6",source:"@site/docs/Kubernetes/15-Kubernetes-Service.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/service-component",permalink:"/Kubernetes/service-component",draft:!1,tags:[{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"Network",permalink:"/tags/network"}],version:"current",lastUpdatedAt:1663557392,formattedLastUpdatedAt:"Sep 19, 2022",sidebarPosition:15,frontMatter:{id:"kubernetes-service",title:"Kubernetes\u7cfb\u5217\u6587 - Service\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e09)",description:"\u804a\u804aKubernetes Service\u76f8\u95dc\u7684\u62bd\u8c61\u5143\u4ef6",slug:"service-component",date:"2022-09-19T02:00:00.000+0800",template:"post",draft:!1,category:"Kubernetes",tags:["Kubernetes","Network"],socialImage:""},sidebar:"defaultSidebar",previous:{title:"Kubernetes\u7cfb\u5217\u6587 - Pod\u76f8\u95dc\u62bd\u8c61\u5143\u4ef6\u4ecb\u7d39 (\u4e8c)",permalink:"/Kubernetes/pod-management"},next:{title:"Kubernetes\u7cfb\u5217\u6587 - Ingress\u62bd\u8c61\u5143\u4ef6\u8207Networks (\u56db)",permalink:"/Kubernetes/ingress-and-networks"}},p={},u=[{value:"Label \u57fa\u672c\u4ecb\u7d39",id:"label-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"Label Selector",id:"label-selector",level:4},{value:"Annotation \u57fa\u672c\u4ecb\u7d39",id:"annotation-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"Service \u57fa\u672c\u4ecb\u7d39",id:"service-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"ClusterIP",id:"clusterip",level:4},{value:"NodePort",id:"nodeport",level:4},{value:"LoadBalancer (Cloud Provider)",id:"loadbalancer-cloud-provider",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],d={toc:u};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\u6211\u5011\u6703\u804a\u5230"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Label \u57fa\u672c\u4ecb\u7d39"),(0,a.kt)("li",{parentName:"ul"},"Annotation \u57fa\u672c\u4ecb\u7d39"),(0,a.kt)("li",{parentName:"ul"},"Service \u57fa\u672c\u4ecb\u7d39")),(0,a.kt)("h2",{id:"label-\u57fa\u672c\u4ecb\u7d39"},"Label \u57fa\u672c\u4ecb\u7d39"),(0,a.kt)("p",null,"Label \u662f\u4e00\u7a2e\u4ee5 Key-Value \u5f62\u5f0f\u4e26\u8cbc\u5728\u5143\u4ef6\u4e0a\u7684\u4e00\u7a2e\u5c6c\u6027\uff0c\u4e3b\u8981\u7684\u76ee\u7684\u662f\u8b93",(0,a.kt)("inlineCode",{parentName:"p"},"\u958b\u767c\u8005"),"\u8207",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes"),"\u672c\u8eab\u80fd\u5920\u4f9d\u7167 Label \u4f86\u5feb\u901f\u5730\u5c0b\u627e\u4e00\u7fa4\u529f\u80fd\u76f8\u8fd1\u7684\u5143\u4ef6\u3002\u9019\u4e9b\u5143\u4ef6\u53ef\u4ee5\u662f Pod \u6216 Node \u7b49\u4efb\u4f55 Kubernetes \u7684\u62bd\u8c61\u5143\u4ef6\u3002\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u628a Pod \u8cbc\u4e0a\u76f8\u5c0d\u61c9\u7684\u6a19\u7c64\uff0c\u4e4b\u5f8c\u8b93 Service \u6216\u8005 Deployment \u80fd\u5920\u5feb\u901f\u7684\u627e\u5230\u9019\u7fa4\u4e00\u6a23\u529f\u80fd\u7684 Pod\uff0c\u7136\u5f8c\u9032\u884c\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"Label \u7684\u7279\u6027\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key Value \u7684\u5f62\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"Label \u80fd\u5920\u6e05\u695a\u5730\u628a\u4e0d\u540c\u529f\u80fd\u6216\u4e0d\u540c\u7a2e\u985e\u7684 Pod \u505a\u76f8\u5c0d\u61c9\u7684\u7fa4\u7d44\u5206\u985e"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5143\u4ef6 (Node/Pod)\u90fd\u53ef\u4ee5\u64c1\u6709\u591a\u500b Label"),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7684\u5143\u4ef6\u7684 Label \u4e5f\u4e0d\u9700\u8981\u64c1\u6709\u76f8\u540c\u7684 Label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u540c\u6a23\u90fd\u662f api pod, \u4e00\u500b\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"env: prod"),", \u53e6\u4e00\u500b\u5247\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"env: QA")))),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e Label Selector \u53ef\u4ee5\u628a\u6307\u5b9a Label \u7684\u5143\u4ef6\u90fd\u4e00\u6b21\u627e\u51fa\u4f86")),(0,a.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u4eca\u5929\u555f\u52d5\u4e86 4 \u7a2e\u4e0d\u540c\u7684 Deployment \u800c\u4e14\u6bcf\u500b Deployment \u90fd\u6709\u5404\u81ea\u7684 replica \u6578\u91cf\u7684\u6642\u5019\uff0c\u6211\u5011\u4f86\u60f3\u50cf\u4e00\u4e0b\uff0c\u5f9e Pod \u89d2\u5ea6\u7684\u4fef\u8996\u5716\u6703\u9577\u600e\u6a23\u3002"),(0,a.kt)("admonition",{title:"Pod \u7684\u547d\u540d\u898f\u5247",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Deployment \u5efa\u7acb\u51fa\u4f86\u7684 Pod \u7684\u547d\u540d\u65b9\u5f0f\u70ba{DeploymentName}-{ReplicaSetHashId}-{UniqueId}\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u8209\u4f8b\u4f86\u8aaa frontend-65c6dc398-334b1")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WithoutLabel",src:r(6851).Z,width:"606",height:"438"})),(0,a.kt)("p",null,"\u5982\u4e0a\u5716\uff0c\u6211\u5011\u53ea\u80fd\u5f9e Pod \u7684\u540d\u7a31\u4f86\u8fa8\u5225\u9019\u500b Pod \u662f\u4ec0\u9ebc\u670d\u52d9\uff0c\u4e5f\u5b8c\u5168\u6c92\u6709 Group \u7684\u6982\u5ff5\uff0c\u60f3\u50cf\u4e00\u4e0b\u5982\u679c\u6211\u5011\u4eca\u5929\u6709\u5e7e\u767e\u5e7e\u5343\u500b Pod \u7684\u6642\u5019\uff0c\u7121\u8ad6\u662f\u958b\u767c\u8005\u9084\u662f Kubernetes \u90fd\u662f\u96e3\u4ee5\u5c0d\u9019\u4e9b Pod \u9032\u884c\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u63a5\u8457\u6211\u5011\u770b\u770b\u7576\u6211\u5011\u52a0\u4e0a Label \u5f8c\u7684\u6548\u679c\u600e\u9ebc\u6a23\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Label",src:r(6660).Z,width:"606",height:"438"})),(0,a.kt)("p",null,"\u9019\u908a\u6211\u53ea\u662f\u7528\u529f\u80fd\u7576 Label \u4f5c\u70ba\u7bc4\u4f8b\uff0c\u4f9d\u6b64\u4f86\u5340\u5206\u6bcf\u500b Pod \u7684\u985e\u578b\u3002\u900f\u904e\u9019\u4e9b Label \u6211\u5011\u53ef\u4ee5\u628a Pod \u5feb\u901f\u5730\u4f9d\u7167\u529f\u80fd\u6216\u7279\u6027\u5206\u6210\u4e0d\u540c\u7684\u7fa4\u7d44\uff0c\u63a5\u8457\u80fd\u900f\u904e Label Selector \u7684\u65b9\u5f0f\u76f4\u63a5\u627e\u5230\u4e00\u7fa4\u76f8\u5c0d\u61c9\u7684 Pod\u3002\u5728\u771f\u5be6\u7684\u7522\u54c1\u74b0\u5883\u4e2d\uff0c\u5e38\u898b\u7684 Label \u7bc4\u4f8b\u9084\u6709\u4ee5\u4e0b\u9019\u4e9b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app: api/user-api"),(0,a.kt)("li",{parentName:"ul"},"env: Prod/QA/Staging"),(0,a.kt)("li",{parentName:"ul"},"tier: frontend/backend")),(0,a.kt)("admonition",{title:"Label \u4f7f\u7528\u63d0\u793a",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u518d Label \u4e2d\u4f7f\u7528\u4e0d\u662f\u7528\u65bc\u8b58\u5225\u7684\u6578\u503c\uff0c\u9019\u4e9b\u975e\u7d50\u69cb\u5316(json)\u7684\u6578\u503c\u8acb\u4f7f\u7528 Annotation\u3002\u4f8b\u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},'PodBasicInfo: {"image": nginx, "imageVersion": "1.7.4", "appVersion": "0.0.1"}'))),(0,a.kt)("admonition",{title:"Label \u5be6\u6230\u5c0f\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Label \u4e5f\u5e38\u5e38\u7528\u65bc\u7522\u54c1\u74b0\u5883\u7684 Debug\uff0c\u5047\u8a2d\u4eca\u5929 Prod \u4e0a\u6709\u4e00\u500b api pod \u58de\u4e86\uff0c\u6211\u5011\u53c8\u7121\u6cd5\u99ac\u4e0a\u4fee\u6b63\u7684\u6642\u5019\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u5e6b\u4ed6\u8cbc\u4e0a Bug Label\uff0c\u4e26\u628a\u5b83\u5f9e Service \u4e2d\u62ff\u6389\uff0c\u4e4b\u5f8c\u6709\u6642\u9593\u518d\u56de\u4f86\u770b\u9019\u500b Pod \u662f\u51fa\u4e86\u4ec0\u9ebc\u4e8b\u3002\u9019\u6a23\u53ef\u4ee5\u907f\u514d\u91cd\u555f Pod\uff0c\u7576\u4e0b Bug \u74b0\u5883\u6703\u6d88\u5931\u7684\u554f\u984c\u3002")),(0,a.kt)("h4",{id:"label-selector"},"Label Selector"),(0,a.kt)("p",null,"Kuberentes \u4e2d\u7684\u62bd\u8c61\u5143\u4ef6\u5982 Service \u6216\u662f Deployment \u5176\u5be6\u90fd\u662f\u900f\u904e Label Selector \u5728\u6c7a\u5b9a\u9078\u64c7\u54ea\u4e00\u985e\u578b\u7684 Pod\u3002Label Selector \u76ee\u524d\u5e38\u898b\u7684\u6709\u5169\u7a2e\u4e0b\u689d\u4ef6\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u76f8\u7b49 (\u9078\u64c7 app \u6a19\u7c64\u70ba api \u7684\u6240\u6709 Pod)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Service\nmetadata:\n  name: api\nspec:\n  type: ClusterIP\n  selector: # \u9078\u64c7app\u6a19\u7c64\u70baapi\u7684\u6240\u6709Pod\n    app: api\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 8000\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Label \u8868\u9054\u5f0f (\u9078\u64c7 app \u6a19\u7c64\u70ba nginx \u4e14 component \u7684 label \u5fc5\u9808\u8981\u662f frontend \u7684\u6240\u6709 pod)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n....\nselector:\n  matchLabel:\n    app: nigix\n  matchExpressions:\n    - key: component\n      operator: In\n      values:\n        - frontend\n....\n")),(0,a.kt)("h2",{id:"annotation-\u57fa\u672c\u4ecb\u7d39"},"Annotation \u57fa\u672c\u4ecb\u7d39"),(0,a.kt)("p",null,"Annotation \u8ddf Label \u5e7e\u4e4e\u662f\u4e00\u6a23\u7684\u6771\u897f\uff0c\u90fd\u662f\u4ee5 Key-Value \u7684\u5f62\u5f0f\u5728\u66ff\u5143\u4ef6\u8cbc\u6a19\u7c64\uff0c\u4f46 Annotation \u66f4\u50cf\u662f\u7d66\u958b\u767c\u8005\u770b\u7684\u3002\u63db\u53e5\u8a71\u8aaa Annotation \u7684\u76ee\u7684\u662f\u55ae\u7d14\u66ff\u5143\u4ef6\u7559\u4e0b\u4e00\u4e9b\u7d00\u9304\u5982\u4f5c\u8005\u8cc7\u8a0a\u6216\u8005\u7dad\u8b77\u7684\u90e8\u9580\u7b49\u3002\u800c Label \u8207 Annotation \u6700\u5927\u7684\u5dee\u5225\u5c31\u662f Kubernetes \u4e26\u4e0d\u6703\u53bb\u8b80 Annotation \u76f8\u95dc\u7684\u8cc7\u6599\u3002"),(0,a.kt)("p",null,"Annotation \u7684\u7279\u6027\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u4f86\u653e\u4e00\u4e9b\u975e\u5206\u985e\u529f\u80fd\u7684\u8cc7\u8a0a\uff0c\u4f8b\u5982 Author/Version/Pod restartAt \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u8ddf Label \u7684\u6700\u5927\u5dee\u5225\u5c31\u662f Annotation \u771f\u7684\u5c31\u662f\u653e\u4e00\u4e9b\u7d66\u958b\u767c\u8005\u770b\u7684\u88dc\u5145\u8cc7\u8a0a\u800c\u5df2"),(0,a.kt)("li",{parentName:"ul"},"\u4e26\u6c92\u6709 Annotation Selector \u9019\u7a2e\u6771\u897f")),(0,a.kt)("h2",{id:"service-\u57fa\u672c\u4ecb\u7d39"},"Service \u57fa\u672c\u4ecb\u7d39"),(0,a.kt)("p",null,"\u518d\u8b1b Service \u4e4b\u524d\uff0c\u6211\u5011\u5148\u60f3\u50cf\u4e00\u4e0b\u6211\u5011\u600e\u9ebc\u8ddf\u771f\u6b63\u63d0\u4f9b\u529f\u80fd\u7684 Pod \u9032\u884c\u6e9d\u901a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WithoutService",src:r(4768).Z,width:"668",height:"390"})),(0,a.kt)("admonition",{title:"Tip",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5916\u90e8\u7684\u6d41\u91cf\u662f\u6c92\u8fa6\u6cd5\u76f4\u63a5\u6253\u5165 Cluster \u5167\u90e8\u7684 IP \u6216 Pod\uff0c\u4e0d\u904e\u9019\u908a\u70ba\u4e86\u8b1b\u89e3\u65b9\u4fbf\u6211\u5011\u5148\u5047\u8a2d\u53ef\u4ee5\u76f4\u63a5\u6253\u9032\u53bb\uff0c\u6216\u8005\u60f3\u50cf\u6210 Cluster \u5167\u90e8\u7684\u6d41\u91cf\u3002")),(0,a.kt)("p",null,"\u90a3\u9019\u6a23\u7684\u6e9d\u901a\u65b9\u5f0f\u6703\u7522\u751f\u54ea\u4e9b\u554f\u984c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u53ea\u662f\u60f3\u6253\u500b API\uff0c\u600e\u9ebc\u6703\u6709\u90a3\u9ebc\u591a Pod \u7684 IP \u8981\u8a18"),(0,a.kt)("li",{parentName:"ul"},"Pod \u7684 IP \u4e26\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u6bcf\u6b21\u7684 Pod \u91cd\u555f\u5f8c\uff0cIP \u90fd\u6703\u91cd\u65b0\u5206\u914d"),(0,a.kt)("li",{parentName:"ul"},"\u6c92\u6709 Load Balance \u7684\u6982\u5ff5")),(0,a.kt)("p",null,"\u90a3\u6709\u4e86 Service \u5f8c\u6211\u5011\u600e\u9ebc\u8ddf Pod \u6e9d\u901a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Service",src:r(8295).Z,width:"668",height:"522"})),(0,a.kt)("admonition",{title:"Tip",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u518d\u63d0\u9192\u4e00\u6b21\u5916\u90e8\u7684\u6d41\u91cf\u662f\u6c92\u8fa6\u6cd5\u76f4\u63a5\u6253\u5165 Cluster \u5167\u90e8\u7684 IP\uff0c\u7b49\u7b49\u6703\u63a5\u8457\u4ecb\u7d39 Service \u600e\u9ebc\u628a\u6d41\u91cf\u6253\u9032\u53bb\u3002")),(0,a.kt)("p",null,"\u7531\u65bc\u9019\u4e9b\u554f\u984c\u6240\u4ee5 Kubernetes \u975e\u5e38\u8cbc\u5fc3\u7684\u5e6b\u6211\u5011\u8a2d\u8a08\u4e86 Service\uff0c\u7c21\u55ae\u4f86\u8aaa\u5982\u679c\u6211\u5011\u8981\u8ddf\u67d0\u4e00\u7a2e Pod \u6e9d\u901a\uff0c\u6211\u5011\u53ea\u9700\u8981\u8ddf\u4ed6\u7684 Service \u6e9d\u901a\u5c31\u597d\uff0c\u4ed6\u6703\u81ea\u5df1\u8ddf Pod \u5011\u9032\u884c\u6e9d\u901a\uff0c\u4e26\u63d0\u4f9b\u4e86 Load Balance \u7684\u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u8aaa\u6211\u5011\u4e0d\u7528\u7169\u60f1 Service \u6703\u5e6b\u6211\u5011\u628a\u6d41\u91cf\u8f49\u767c\u5230\u54ea\u500b Pod\uff0c\u4ed6\u81ea\u5df1\u6703\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u66f4\u7cbe\u78ba\u4f86\u8aaa\uff0c\u4e00\u500b Service \u5c31\u662f\u63d0\u4f9b\u4e00\u500b\u670d\u52d9\uff0c\u8b93\u958b\u767c\u8005\u4e0d\u9700\u8981\u53bb\u8003\u616e Kubernetes \u5167\u90e8\u7684\u7db2\u8def\u6216 Node \u554f\u984c\uff0c\u6211\u5011\u4e5f\u4e0d\u9700\u8981\u53bb\u77e5\u9053 Pod \u7684\u5167\u90e8 IP \u662f\u54ea\u4e00\u4e9b\uff0c\u6211\u5011\u53ea\u9700\u8981\u8ddf Service \u6e9d\u901a\uff0cService \u90fd\u6703\u5e6b\u6211\u5011\u81ea\u52d5\u8f49\u767c\u5230\u76f8\u5c0d\u61c9\u7684 Pod\uff0c\u6240\u4ee5\u9019\u4e9b\u670d\u52d9\u672c\u8eab\u662f\u7531\u4e00\u7fa4\u76f8\u540c\u529f\u80fd\u7684 Pod \u6240\u63d0\u4f9b\u3002"),(0,a.kt)("p",null,"Service \u63d0\u4f9b\u4e09\u7a2e\u4e0d\u540c\u7684\u7a2e\u985e ClusterIP/NodePort/LoadBalancer\uff0c\u9019\u4e09\u7a2e Service \u90fd\u5f88\u5e38\u4f7f\u7528\u4e14\u5404\u81ea\u6709\u9069\u7528\u7684\u5834\u666f\u3002"),(0,a.kt)("h4",{id:"clusterip"},"ClusterIP"),(0,a.kt)("p",null,"ClusterIP \u662f Service \u9810\u8a2d\u7684\u670d\u52d9\u985e\u5225\uff0c\u555f\u52d5 ClusterIP \u9019\u500b Service \u6642\uff0cKubernetes \u6703\u5206\u914d\u4e00\u7d44 VirtualIP \u7d66\u9019\u7d44 Service\u3002Cluster \u5167\u90e8\u7684 Pod \u53ef\u4ee5\u900f\u904e\u9019\u7d44 Virtual IP \u8207\u670d\u52d9\u76f4\u63a5\u9032\u884c\u6e9d\u901a\u3002"),(0,a.kt)("p",null,"ClusterIP \u7684\u7279\u6027\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u65bc Kubernetes \u5167\u90e8\u7684\u7db2\u8def\u6e9d\u901a (\u5916\u90e8\u6d41\u91cf\u8a2a\u554f\u4e0d\u5230 ClusterIP)"),(0,a.kt)("li",{parentName:"ul"},"\u555f\u52d5\u6642\u6703\u88ab\u5206\u914d\u5230\u4e00\u7d44\u56fa\u5b9a\u7684 VirtualIP"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8996\u70ba\u662f\u4e00\u7d44\u529f\u80fd\u76f8\u540c\u7684 Pod \u7684\u670d\u52d9\uff0c\u7701\u53bb\u8207 Pod \u500b\u5225\u6e9d\u901a\u7684\u56f0\u64fe"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u6703\u4f7f\u7528 service \u540d\u7a31\u751f\u6210\u5167\u90e8\u7684 DNS (\u4f8b\u5982\u53ef\u4ee5\u65bc\u5167\u90e8\u7db2\u8def\u547c\u53eb http://api-server)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ClusterIP",src:r(6736).Z,width:"846",height:"426"})),(0,a.kt)("p",null,"\u5982\u4e0a\u5716\u6240\u793a\uff0cAPI-Server Service \u5c31\u662f\u4ee3\u8868 api-server \u7684\u670d\u52d9\u3002User-Server Service \u5247\u4ee3\u8868 user-server \u9019\u7d44 Pod \u7684\u670d\u52d9\u3002\u5047\u8a2d\u6211\u5011\u4eca\u5929\u8981\u5f9e api-server B \u6253 request \u5230 user-server \u53bb\u5efa\u7acb\u4e00\u500b\u65b0 User\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"api-server B \u6253 request \u5230 http://user-server/create/user"),(0,a.kt)("li",{parentName:"ul"},"User-Server \u6536\u5230 request \u5f8c\u6703\u628a request \u6253\u5230\u4efb\u4e00\u7684 user-server \u7684 8080port (\u6839\u64da yaml \u8a2d\u5b9a)")),(0,a.kt)("p",null,"\u9019\u908a\u63d0\u4f9b\u4e00\u500b\u5efa\u7acb ClusterIP \u7684\u7bc4\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Service\nmetadata:\n  name: api-server\nspec:\n  type: ClusterIP\n  selector:\n    app: api-server\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 8000\n")),(0,a.kt)("h4",{id:"nodeport"},"NodePort"),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u70ba\u6b62\uff0c\u6211\u5011\u5df2\u7d93\u53ef\u4ee5\u900f\u904e\u5efa\u7acb Deployment \u8207 ClusterIP Service \u4f86\u9032\u884c\u5167\u90e8\u7db2\u8def\u7684\u6e9d\u901a\u3002\u4f46 ClusterIP \u662f\u7121\u6cd5\u8b93\u5916\u90e8\u6d41\u91cf\u9032\u884c\u8a2a\u554f\uff0cNodePort \u5c31\u662f\u8981\u89e3\u6c7a\u9019\u500b\u554f\u984c\u3002"),(0,a.kt)("p",null,"NodePort \u662f\u900f\u904e\u6253\u958b\u6bcf\u500b Node \u4e0a\u7684\u6307\u5b9a Port \u4f86\u8b93\u5916\u90e8\u7684\u6d41\u91cf\u76f4\u63a5\u6253\u9032 Cluster\uff0c\u8209\u4f8b\u4f86\u8aaa\u555f\u52d5 NodePort \u670d\u52d9\u5f8c\u53ef\u4ee5\u5f9e Cluster \u5916\u90e8\u6253",(0,a.kt)("inlineCode",{parentName:"p"},"<NodeIP>:<NodePort>"),"\u7684\u65b9\u5f0f\u76f4\u63a5\u8207 Service \u9032\u884c\u6e9d\u901a\uff0c\u63a5\u8457\u6d41\u91cf\u9032\u5165 Node \u5f8c\uff0cNodePort \u6703\u5e6b\u4f60\u628a\u6d41\u91cf\u8f49\u5165\u6307\u5b9a\u7684 ClusterIP\u3002\u7e3d\u4e4b NodePort \u5176\u5be6\u662f\u6703\u555f\u52d5\u5169\u5c64\u670d\u52d9(\u555f\u52d5 NodePort \u672c\u8eab\u8207\u555f\u52d5\u4e00\u7d44 ClusterIP)\u4f86\u9054\u6210 Node \u6d41\u91cf\u8f49\u767c\u3002"),(0,a.kt)("p",null,"NodePort \u7684\u7279\u6027\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8b93\u5916\u90e8\u6d41\u91cf\u9032\u884c\u8a2a\u554f"),(0,a.kt)("li",{parentName:"ul"},"\u5e95\u5c64\u662f\u900f\u904e ClusterIP \u4f86\u9032\u884c\u6d41\u91cf\u5230 Pod \u7684\u8f49\u767c"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u6253\u958b Worker Node \u4e0a\u7684\u6307\u5b9a Port (default: 30000-32767)\uff0c\u4e0d\u6307\u5b9a\u7684\u8a71 Kubernetes \u6703\u96a8\u6a5f\u5206\u914d\u4e00\u500b port \u7d66\u4f60")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NodePort",src:r(5754).Z,width:"992",height:"678"})),(0,a.kt)("p",null,"\u6211\u5011\u4e00\u6a23\u6cbf\u7528\u525b\u525b\u7684\u4f8b\u5b50\uff0c\u7576\u4eca\u5929\u5916\u90e8\u6d41\u91cf\u8981\u6253\u5165 Cluster \u5167\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u6253\u4efb\u4e00\u53f0 Node\u3002NodePort \u6703\u6839\u64da\u88ab call \u7684 port \u4f86\u6c7a\u5b9a\u628a\u6d41\u91cf\u8f49\u767c\u5230\u54ea\u500b ClusterIP \u4e0a\u3002(\u8209\u4f8b: 30000 \u5c0d\u61c9\u5230 API-Server Service\uff0c30001 \u5c0d\u61c9\u5230 User-Server Service)\u3002\u5be6\u969b\u6d41\u7a0b\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547c\u53eb",(0,a.kt)("inlineCode",{parentName:"li"},"http://<NodeIP>:30000/cars")),(0,a.kt)("li",{parentName:"ul"},"Worker Node \u6703\u628a\u9019\u500b\u6d41\u91cf\u8f49\u767c\u5230 API-Server \u7684 Service \u4e0a"),(0,a.kt)("li",{parentName:"ul"},"API-Service \u6703\u628a\u9019\u500b\u6d41\u91cf\u8f49\u767c\u5230 api-server \u4e0a(\u53ef\u80fd\u662f api-server A \u4e5f\u53ef\u80fd\u662f api-server B)"),(0,a.kt)("li",{parentName:"ul"},"Pod \u6536\u5230 Request \u5f8c\u8655\u7406\u5b8c\u518d\u9032\u884c\u8fd4\u56de")),(0,a.kt)("p",null,"\u9019\u908a\u63d0\u4f9b\u4e00\u500b NodePort \u7684\u7bc4\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Service\nmetadata:\n  name: user-server\nspec:\n  type: NodePort\n  selector:\n    app: user-server\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 8000\n      nodePort: 30001\n")),(0,a.kt)("h4",{id:"loadbalancer-cloud-provider"},"LoadBalancer (Cloud Provider)"),(0,a.kt)("p",null,"\u958b\u59cb\u4e4b\u524d\u6211\u5011\u4e00\u6a23\u5148\u60f3\u4e00\u4e0b\u53ea\u7528 NodePort \u6703\u6709\u4ec0\u9ebc\u554f\u984c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client \u8981\u8a18\u4e00\u5806 NodeIP \u8207 NodePort"),(0,a.kt)("li",{parentName:"ul"},"Node \u5c64\u7d1a\u6c92\u6709\u505a Load Balance (\u5982\u679c\u5927\u5bb6\u90fd\u53ea\u56fa\u5b9a\u6253\u540c\u4e00\u53f0 Worker Node\uff0c\u5bb9\u6613\u88ab\u6253\u639b)")),(0,a.kt)("p",null,"LoadBalancer \u53ea\u6709\u5728\u4f7f\u7528 Cloud Provider(\u5982 GKE \u6216 EKS)\u624d\u53ef\u4ee5\u4f7f\u7528\uff0c\u6211\u5011\u555f\u7528 LoadBalancer \u6642\uff0cLoadBalancer \u6703\u5e6b\u6211\u5011\u628a\u6d41\u91cf\u5206\u914d\u5230\u6bcf\u500b Node \u4e0a\uff0c\u85c9\u6b64\u4f86\u9054\u5230 Node \u5c64\u7d1a\u7684\u5206\u6563\u6d41\u91cf\u8207\u6e1b\u5c11\u4e00\u5806 IP entrypoint \u7684\u554f\u984c\u3002LoadBalancer Service \u5e95\u5c64\u5176\u5be6\u555f\u52d5\u4e86\u4e09\u5c64\u670d\u52d9(LoadBalancer + NodePort + ClusterIP)\u3002"),(0,a.kt)("p",null,"LoadBalancer \u7684\u7279\u6027\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7531\u65bc\u662f Cloud Provider \u63d0\u4f9b\uff0c\u6bd4\u8f03\u4e0d\u5bb9\u6613\u88ab\u6253\u639b\uff0c\u4f46\u4e5f\u6703\u7522\u751f\u984d\u5916\u4ed8\u8cbb"),(0,a.kt)("li",{parentName:"ul"},"Client \u53ea\u9700\u8981\u8a18\u4e00\u500b LoadBalancer \u63d0\u4f9b\u7684 IP"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u5916\u90e8\u6d41\u91cf\u8f49\u767c\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"<NodeIP>:<NodePort>"),"\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b Node \u5c64\u7d1a\u7684 Load Balance")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LoadBalancer",src:r(5614).Z,width:"990",height:"810"})),(0,a.kt)("p",null,"\u6211\u5011\u4e00\u6a23\u6cbf\u7528\u525b\u525b\u7684\u4f8b\u5b50\uff0c\u7576\u4eca\u5929\u5916\u90e8\u6d41\u91cf\u8981\u6253\u5165 Cluster \u5167\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u6253 LoadBalancer\u3002LoadBalancer \u6703\u81ea\u52d5\u628a\u5916\u90e8\u6d41\u91cf\u5e73\u5747\u5206\u914d\u7d66\u6bcf\u500b Node\uff0c\u63a5\u8457\u6703\u6839\u64da\u88ab call \u7684 port \u4f86\u6c7a\u5b9a\u628a\u6d41\u91cf\u8f49\u767c\u5230\u54ea\u500b ClusterIP \u4e0a\u3002(\u8209\u4f8b: 30000 \u5c0d\u61c9\u5230 API-Server Service\uff0c30001 \u5c0d\u61c9\u5230 User-Server Service)\u3002\u5be6\u969b\u6d41\u7a0b\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547c\u53eb",(0,a.kt)("inlineCode",{parentName:"li"},"http://<LoadBalancerIP>/cars")," (\u552f\u4e00\u7684 entrypoint)"),(0,a.kt)("li",{parentName:"ul"},"LoadBalancer \u6703\u628a\u9019\u500b\u6d41\u91cf\u5206\u914d\u5230\u96a8\u6a5f\u7684 Worker Node \u8207\u6307\u5b9a\u7684 NodePort \u4e0a"),(0,a.kt)("li",{parentName:"ul"},"Worker Node \u6703\u628a\u9019\u500b\u6d41\u91cf\u8f49\u767c\u5230 API-Server \u7684 Service \u4e0a"),(0,a.kt)("li",{parentName:"ul"},"API-Service \u6703\u628a\u9019\u500b\u6d41\u91cf\u8f49\u767c\u5230 api-server \u4e0a(\u53ef\u80fd\u662f api-server A \u4e5f\u53ef\u80fd\u662f api-server B)"),(0,a.kt)("li",{parentName:"ul"},"Pod \u6536\u5230 Request \u5f8c\u8655\u7406\u5b8c\u518d\u9032\u884c\u8fd4\u56de")),(0,a.kt)("p",null,"\u9019\u908a\u63d0\u4f9b\u4e00\u500b LoadBalancer \u7684\u7bc4\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: api-server\nspec:\n  type: LoadBalancer\n  selector:\n    name: api-server\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 8000\n      nodePort: 30000 # \u4e0d\u6307\u5b9a\u7684\u8a71Kubernetes\u6703\u96a8\u6a5f\u5206\u914d\n")),(0,a.kt)("admonition",{title:"\u5371\u96aa\u767c\u8a00",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Service \u5167\u7684 LoadBalancer \u771f\u7684\u662f\u53d6\u7684\u5f88\u721b\u7684\u540d\u5b57\u3002\u7531\u65bc\u662f\u4f7f\u7528 Cloud Provider \u63d0\u4f9b\u7684 LoadBalancer \u4f86\u9054\u6210\u9019\u9805\u670d\u52d9\uff0c\u6240\u4ee5\u53d6\u540d\u53eb LoadBalancer\u3002\u4f46\u5be6\u969b\u4e0a ClusterIP \u5c31\u63d0\u4f9b Service \u8207 Pod \u4e4b\u9593\u7684 Load Balance \u529f\u80fd\u3002\u500b\u4eba\u8a8d\u70ba\u53d6\u540d\u53eb LoadBalancer \u6703\u8b93\u521d\u5b78\u8005\u8aa4\u6703\u662f\u4e0d\u662f\u53ea\u6709 LoadBalancer \u7684 Service \u624d\u6709 Load Balance \u7684\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u9019\u7bc7\u4e3b\u8981\u4ecb\u7d39\u4e86 Label \u8207 Service \u76f8\u95dc\u7684\u62bd\u8c61\u5143\u4ef6\uff0c\u5230\u76ee\u524d\u70ba\u6b62\u6211\u5011\u7e3d\u5171\u4ecb\u7d39\u4e86\u90e8\u7f72 Pod \u7684 Deployment\uff0c\u7db2\u8def\u76f8\u95dc\u7684 Service \u7b49\u3002\u57fa\u672c\u4e0a\u9019\u4e9b\u5df2\u7d93\u6db5\u84cb\u4e86\u6700\u5e38\u7528\u7684 70%\u5143\u4ef6\u4e86\u3002\u5927\u5bb6\u5df2\u7d93\u53ef\u4ee5\u900f\u904e\u9019\u4e9b\u5143\u4ef6\u90e8\u7f72\u51fa\u4e00\u500b\u5b8c\u6574\u7684\u74b0\u5883\u4e86\u3002\u8209\u4f8b\u4f86\u8aaa\u6211\u5011\u8981\u90e8\u7f72\u4e00\u500b blog\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e deployment \u5efa\u7acb\u524d\u7aef\u7684 nginx webserver \u8207\u5f8c\u7aef\u7684 api server\uff0c\u900f\u904e Service (LoadBalancer \u6216 NodePort)\u4f86\u4e32\u9023 client \u7aef nginx \u8207 api server \u7684\u7db2\u8def\u6d41\u91cf (Database \u7684\u90e8\u5206\u6211\u5011\u5148\u8df3\u904e XD\uff0c\u5f8c\u7e8c\u6587\u7ae0\u6703\u63a5\u8457\u4ecb\u7d39\u5230)\u3002\u96d6\u7136\u6211\u7684\u6587\u7ae0\u5927\u90e8\u5206\u90fd\u5728\u8b1b\u89e3\u89c0\u5ff5\uff0c\u4f46\u5b78\u7fd2\u7684\u904e\u7a0b\u4e2d\u9084\u662f\u5efa\u8b70\u591a\u591a\u900f\u904e minikube \u6216 kind \u7b49 local \u7684 kubernetes \u74b0\u5883\u4f86\u7df4\u7fd2\uff0c\u5be6\u969b\u78ba\u8a8d\u7db2\u8def\u7684\u6d41\u91cf\u600e\u9ebc\u6d41\u5c0d\u5b78\u7fd2\u6703\u5f88\u6709\u5e6b\u52a9\u3002"))}s.isMDXComponent=!0},6736:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clusterip-a1307720bb343f337ace5b96dc7f78f6.png"},6660:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/label-4731f624954e9aaae82354b395a9e41f.png"},5614:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/loadbalancer-de2e7c63314b4fe3ca8a6073c6917e6b.png"},5754:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nodeport-c2b79923f0da738107f5b4e64600b924.png"},8295:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/service-41bab797ea04ff27cb151285a2dd4d6e.png"},4768:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/withoutService-ec481ec9999911a867d965a6cf91369b.png"},6851:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/withoutlabel-833923291e2dd7c1b2afd60e91af8564.png"}}]);
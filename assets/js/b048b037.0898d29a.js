"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=l.createContext({}),s=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||r;return a?l.createElement(d,n(n({ref:t},p),{},{components:a})):l.createElement(d,n({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var s=2;s<r;s++)n[s]=a[s];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(7462),i=(a(7294),a(3905));const r={id:"vertical-scaling",title:"Vertical Scaling Postgres with Zero-downtime",description:"\u804a\u804a\u600e\u9ebc\u5728\u4e0d\u505c\u6a5f\u7684\u72c0\u6cc1\u4e0b\u5782\u76f4\u64f4\u5c55Postgres",slug:"/",date:"2022-08-28T02:00:00.000+0800",template:"post",draft:!1,category:"Database",tags:["Database","Postgres","Scaling"],socialImage:""},n=void 0,o={unversionedId:"Database/vertical-scaling",id:"Database/vertical-scaling",title:"Vertical Scaling Postgres with Zero-downtime",description:"\u804a\u804a\u600e\u9ebc\u5728\u4e0d\u505c\u6a5f\u7684\u72c0\u6cc1\u4e0b\u5782\u76f4\u64f4\u5c55Postgres",source:"@site/docs/Database/5-Postgres-Vertical-Scaling.md",sourceDirName:"Database",slug:"/",permalink:"/",draft:!1,tags:[{label:"Database",permalink:"/tags/database"},{label:"Postgres",permalink:"/tags/postgres"},{label:"Scaling",permalink:"/tags/scaling"}],version:"current",lastUpdatedAt:1662134863,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:5,frontMatter:{id:"vertical-scaling",title:"Vertical Scaling Postgres with Zero-downtime",description:"\u804a\u804a\u600e\u9ebc\u5728\u4e0d\u505c\u6a5f\u7684\u72c0\u6cc1\u4e0b\u5782\u76f4\u64f4\u5c55Postgres",slug:"/",date:"2022-08-28T02:00:00.000+0800",template:"post",draft:!1,category:"Database",tags:["Database","Postgres","Scaling"],socialImage:""},sidebar:"defaultSidebar",previous:{title:"Database",permalink:"/category/database"},next:{title:"Row-oriented vs Column-oriented Database",permalink:"/Database/row-column-database-intro"}},c={},s=[{value:"\u4ec0\u9ebc\u662f Vertical Scaling \u8207 Horizontal Scaling",id:"\u4ec0\u9ebc\u662f-vertical-scaling-\u8207-horizontal-scaling",level:2},{value:"Vertical Scaling (Scaling Up)",id:"vertical-scaling-scaling-up",level:4},{value:"Horizontal Scaling (Scaling Out)",id:"horizontal-scaling-scaling-out",level:4},{value:"\u4ec0\u9ebc\u662f Streaming Replication \u8207 Logical Replication",id:"\u4ec0\u9ebc\u662f-streaming-replication-\u8207-logical-replication",level:2},{value:"Streaming Replication",id:"streaming-replication",level:4},{value:"\u512a\u9ede",id:"\u512a\u9ede",level:4},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",level:4},{value:"Logical Replication",id:"logical-replication",level:4},{value:"\u512a\u9ede",id:"\u512a\u9ede-1",level:4},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede-1",level:4},{value:"\u6700\u5c0f\u505c\u6a5f\u6642\u9593\u7684 Vertical Scaling \u7b56\u7565",id:"\u6700\u5c0f\u505c\u6a5f\u6642\u9593\u7684-vertical-scaling-\u7b56\u7565",level:2},{value:"\u90a3\u53ef\u4ee5\u76f4\u63a5\u5728\u6b65\u9a5f 5 \u5c31 Promote Replica A \u6210\u70ba\u65b0\u7684 Master\uff0c\u7136\u5f8c\u518d\u628a\u6d41\u91cf\u5207\u904e\u53bb?",id:"\u90a3\u53ef\u4ee5\u76f4\u63a5\u5728\u6b65\u9a5f-5-\u5c31-promote-replica-a-\u6210\u70ba\u65b0\u7684-master\u7136\u5f8c\u518d\u628a\u6d41\u91cf\u5207\u904e\u53bb",level:4},{value:"Zero-downtime \u7684 Vertical Scaling \u7b56\u7565",id:"zero-downtime-\u7684-vertical-scaling-\u7b56\u7565",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],p={toc:s};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\u6211\u5011\u6703\u804a\u5230"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ec0\u9ebc\u662f Vertical Scaling \u8207 Horizontal Scaling"),(0,i.kt)("li",{parentName:"ul"},"\u4ec0\u9ebc\u662f Streaming Replication \u8207 Logical Replication"),(0,i.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u505c\u6a5f\u6642\u9593\u7684 Vertical Scaling \u7b56\u7565"),(0,i.kt)("li",{parentName:"ul"},"Zero-downtime \u7684 Vertical Scaling \u7b56\u7565")),(0,i.kt)("h2",{id:"\u4ec0\u9ebc\u662f-vertical-scaling-\u8207-horizontal-scaling"},"\u4ec0\u9ebc\u662f Vertical Scaling \u8207 Horizontal Scaling"),(0,i.kt)("admonition",{title:"My tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u70ba\u907f\u514d\u8aa4\u6703\u4ee5\u4e0b\u8aaa\u660e\u90fd\u662f\u7528\u6a5f\u5668\u4f86\u8209\u4f8b\uff0c\u4f46 Vertical Scaling \u8207 Horizontal Scaling \u7684\u64f4\u5c55\u65b9\u5f0f\u6cdb\u6307\u6240\u6709\u8207\u6a5f\u5668\u6216 Pod \u7b49\u76f8\u95dc\u7684 Scaling \u65b9\u6cd5\uff0c\u4e26\u4e0d\u662f\u55ae\u7d14\u6307 Database \u7684\u6a5f\u5668")),(0,i.kt)("h4",{id:"vertical-scaling-scaling-up"},"Vertical Scaling (Scaling Up)"),(0,i.kt)("p",null,"\u900f\u904e\u65b0\u589e\u6a5f\u5668\u7684 CPU/Memory \u6216\u5176\u4ed6\u786c\u9ad4\u8cc7\u6e90\u7684\u65b9\u5f0f\u4f86\u63d0\u5347\u6a5f\u5668\u7684\u8cc7\u6e90\u3002\u8209\u4f8b\u4f86\u8aaa\u65b0\u589e CPU(4 Cores -> 8 Cores)\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scaling-up",src:a(4527).Z,width:"535",height:"218"})),(0,i.kt)("h4",{id:"horizontal-scaling-scaling-out"},"Horizontal Scaling (Scaling Out)"),(0,i.kt)("p",null,"\u900f\u904e\u65b0\u589e\u6a5f\u5668\u6578\u91cf\u7684\u65b9\u5f0f\u4f86\u8b93\u539f\u672c\u7e41\u91cd\u7684\u5de5\u4f5c\u8ca0\u64d4\u5206\u6563\u5230\u66f4\u591a\u7684\u6a5f\u5668\u8eab\u4e0a\uff0c\u5e38\u898b\u7684 AWS ECS \u8207 Kuberentes \u7684 Auto Scaling \u90fd\u662f\u63a1\u7528\u9019\u7a2e\u65b9\u5f0f\u3002\u8209\u4f8b\u4f86\u8aaa 10 \u500b Pods \u627f\u53d7\u4e0d\u4f4f\u76ee\u524d\u7684\u6d41\u91cf\u90a3\u5c31\u958b 20 \u500b Pods\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scaling-out",src:a(3970).Z,width:"565",height:"142"})),(0,i.kt)("p",null,"\u7576 Database \u7684\u8acb\u6c42\u91cf\u6216\u5de5\u4f5c\u8ca0\u8f09\u91cf\u5df2\u7d93\u8d85\u8d8a\u8cc7\u6599\u5eab\u672c\u8eab\u6a5f\u5668\u80fd\u8ca0\u8377\u7684\u4e0a\u9650\u6642\uff0c\u5c31\u9700\u8981\u9032\u884c Scaling\u3002\u81f3\u65bc\u8a72\u63a1\u53d6\u54ea\u7a2e Scaling \u65b9\u5f0f\uff0c\u6211\u5011\u6703\u9700\u8981\u642d\u914d\u7576\u4e0b\u7684\u6a5f\u5668\u72c0\u6cc1\u6216\u7522\u54c1\u7279\u6027\u4f86\u5224\u65b7\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u60c5\u6cc1 1: \u5927\u91cf Query \u7684\u6d41\u91cf\u8d85\u904e\u6a5f\u5668\u6240\u80fd\u627f\u53d7\u6642\uff0c\u6211\u5011\u6703\u9700\u8981\u591a\u958b\u5e7e\u53f0 Replica Database\u3002\u900f\u904e\u591a\u53f0 Read Database \u4f86\u5206\u64d4 Query \u7684\u6d41\u91cf\uff0c\u5df2\u9054\u6210\u964d\u4f4e\u539f\u672c Replica \u6a5f\u5668 CPU loading \u592a\u91cd\u7684\u554f\u984c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u60c5\u6cc1 2: \u6d41\u91cf\u4e2d\u5305\u542b\u5927\u91cf\u7684 Mutation \u7684\u8acb\u6c42\u6642\uff0cMaster Database \u7684 CPU \u6216 Disk \u8ddf\u4e0d\u4e0a\u8acb\u6c42\u901f\u5ea6\uff0c\u5c0e\u81f4 CPU wait \u6216 Replication Lag \u4e0a\u5347\u3002\u9019\u7a2e\u60c5\u6cc1\u6703\u9078\u64c7\u76f4\u63a5\u63d0\u5347\u6a5f\u5668\u7684 CPU \u6216 IOPS\u3002")),(0,i.kt)("h2",{id:"\u4ec0\u9ebc\u662f-streaming-replication-\u8207-logical-replication"},"\u4ec0\u9ebc\u662f Streaming Replication \u8207 Logical Replication"),(0,i.kt)("h4",{id:"streaming-replication"},"Streaming Replication"),(0,i.kt)("p",null,"Streaming Replication \u662f\u57fa\u65bc WAL \u7684\u4e00\u7a2e\u7269\u7406\u8907\u88fd\u7684\u65b9\u5f0f\uff0cStreaming Replication \u6700\u5e38\u7528\u5728 Master-Slave \u7684\u67b6\u69cb\u4e2d\uff0c\u4e5f\u662f\u6211\u5011\u5e38\u898b\u7684 AWS RDS \u8207 GCP Cloud SQL \u7684 Read Replica \u7684\u5be6\u73fe\u65b9\u5f0f\u3002\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u5f9e Master Node \u8907\u88fd WAL \u5230 Slave Node \u4f86\u9054\u6210 replication \u7684\u76ee\u7684\u3002\u7531\u65bc\u662f\u7269\u7406\u8907\u88fd\uff0c\u6240\u4ee5\u6703\u9020\u6210 Slave Node \u53ea\u80fd Read Only \u7684\u9650\u5236\uff0c\u4f46\u4e5f\u56e0\u70ba\u662f\u7269\u7406\u8907\u88fd\uff0c\u5e7e\u4e4e\u6c92\u6709\u8cc7\u6599\u907a\u5931\u7684\u98a8\u96aa\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Streaming",src:a(9844).Z,width:"498",height:"114"})),(0,i.kt)("h4",{id:"\u512a\u9ede"},"\u512a\u9ede"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5177\u5099\u9ad8\u53ef\u7528\u6027\uff0c\u9664\u4e86 Master \u8207 Slave \u540c\u6642\u639b\u4e86\u4ee5\u5916\uff0c\u5e7e\u4e4e\u6c92\u6709\u8cc7\u6599\u907a\u5931\u7684\u98a8\u96aa\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u65bc Slave \u662f Master \u7684\u8907\u88fd\u54c1\uff0c\u6240\u4ee5\u4e0d\u6703\u6709\u56e0\u70ba\u683c\u5f0f\u4e0d\u540c\u800c\u9700\u8981\u66f4\u52d5 Master \u4e0a Schema \u7684\u72c0\u6cc1\u3002")),(0,i.kt)("h4",{id:"\u7f3a\u9ede"},"\u7f3a\u9ede"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Slave \u53ea\u80fd Read Only"),(0,i.kt)("li",{parentName:"ul"},"\u7121\u6cd5\u652f\u63f4 Postgres \u4e0d\u540c\u7248\u672c\u7684 streaming replication")),(0,i.kt)("h4",{id:"logical-replication"},"Logical Replication"),(0,i.kt)("p",null,"Logical Replication \u662f\u4e00\u7a2e\u908f\u8f2f\u8907\u88fd\u7684\u65b9\u5f0f\u7528\u4f86\u8907\u88fd\u8cc7\u6599\u6216\u8cc7\u6599\u7570\u52d5\uff0c\u908f\u8f2f\u8907\u88fd\u807d\u8d77\u4f86\u5f88\u62bd\u8c61\uff0c\u53ef\u4ee5\u60f3\u50cf\u6210\u5c31\u662f\u628a Source Database \u7aef\u7684\u8cc7\u6599\u7570\u52d5\u900f\u904e Insert/Update/Delete \u7b49\u7684 SQL \u547d\u4ee4\u5f9e\u767c\u9001\u7aef\u9001\u5230\u63a5\u6536\u7aef\u53bb\u57f7\u884c\u3002Logical Replication \u662f\u900f\u904e Publish \u8207 Subscribe \u7684\u6a21\u5f0f\uff0c\u6240\u4ee5\u4e5f\u80fd\u540c\u6642\u652f\u63f4\u591a\u500b subscriber\uff0c\u4e26\u4e14\u767c\u9001\u7684\u6700\u5c0f\u55ae\u4f4d\u662f Transation\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Logical",src:a(2633).Z,width:"498",height:"114"})),(0,i.kt)("h4",{id:"\u512a\u9ede-1"},"\u512a\u9ede"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u9078\u64c7\u6307\u5b9a\u7684 table \u5c31\u597d\uff0c\u4e0d\u9700\u8981\u6574\u500b Database \u505a replication"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8de8\u7248\u672c\u7684\u505a replication\uff0c\u7576\u7136\u5c31\u8981\u8655\u7406 data type \u4e0d\u76f8\u5bb9\u8207 Data Schame Conflict \u7684\u554f\u984c (\u53ef\u4ee5\u53c3\u8003",(0,i.kt)("a",{parentName:"li",href:"https://github.com/2ndQuadrant/pglogical"},"pglogical"),")"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 Master-Slave \u7684\u67b6\u69cb\uff0c\u5169\u53f0 Master \u4e5f\u662f Logical Replication \u5e38\u898b\u7684\u642d\u914d"),(0,i.kt)("li",{parentName:"ul"},"publisher/subscriber \u5e95\u5c64\u7684 pg_wal directory \u4e0d\u9700\u8981\u4e00\u6a23")),(0,i.kt)("h4",{id:"\u7f3a\u9ede-1"},"\u7f3a\u9ede"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7531\u65bc postgres \u53ef\u4ee5\u8de8\u7248\u672c\u6216 Schema \u4e0d\u4e00\u5b9a\u8981\u76f8\u540c\uff0c\u9700\u8981\u8655\u7406\u5927\u91cf\u7684 Conflict\uff0c\u4e0d\u7136\u6703\u6709\u6389\u8cc7\u6599\u7684\u98a8\u96aa"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u63f4 DDL (Create/Alter/Drop \u7b49) \u76f8\u95dc\u7684\u8655\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u7576\u767c\u751f\u885d\u7a81\u6642\uff0creplication \u5c31\u6703\u4e2d\u6b62\uff0c\u76f4\u5230\u885d\u7a81\u88ab\u89e3\u6c7a")),(0,i.kt)("h2",{id:"\u6700\u5c0f\u505c\u6a5f\u6642\u9593\u7684-vertical-scaling-\u7b56\u7565"},"\u6700\u5c0f\u505c\u6a5f\u6642\u9593\u7684 Vertical Scaling \u7b56\u7565"),(0,i.kt)("p",null,"\u524d\u9762\u524d\u60c5\u63d0\u8981\u90a3\u9ebc\u591a\uff0c\u91cd\u9ede\u7d42\u65bc\u8981\u4f86\u4e86\u3002\u4ee5\u4e0b\u8209\u4f8b\u7684\u524d\u63d0\u90fd\u662f\u4e00\u53f0 Master \u642d\u914d\u4e00\u53f0 Replica\u3002"),(0,i.kt)("p",null,"\u5148\u8aaa\u76ee\u7684\uff0c\u6211\u5011\u8981\u63d0\u5347\u4e00\u500d\u7684 Master \u8207 Replica \u7684 CPU (\u8209\u4f8b 8 Cores -> 16 Cores)\u3002\u4ee5 GCP \u4f86\u8aaa\uff0c\u5982\u679c\u5f9e Conosle UI \u6216 gcloud CLI \u4e0a\u76f4\u63a5\u8abf\u6574\u6a5f\u5668\u7684 CPU/Memory \u7684\u8a71\uff0c\u5927\u7d04\u8981 5 \u5206\u9418\u7684 downtime \u6642\u9593\u3002\u6211\u5011\u53ef\u4ee5\u900f\u904e\u4e00\u4e9b\u7c21\u55ae\u7684\u7b56\u7565\u4f86\u964d\u4f4e\u9019\u4e9b\u505c\u6a5f\u6642\u9593\u7684\u5f71\u97ff\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"\u5207\u6d41\u91cf\u7684\u65b9\u5f0f\u6709\u5f88\u591a\uff0c\u53ef\u4ee5\u900f\u904e pgbouncer \u6216 DNS \u7b49\u65b9\u5f0f\uff0c\u9019\u908a\u5c31\u4e0d\u7d30\u8aaa"))),(0,i.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9a5f\u70ba Replica zero-downtime \u7b56\u7565\u7684\u6b65\u9a5f:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u76ee\u524d\u72c0\u6cc1\u662f\u6211\u5011\u6703\u6709\u4e00\u53f0 Master A(8 cores)\u8207\u4e00\u53f0 Replica A(8 cores)"),(0,i.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u53f0 Replica B(16 cores)\uff0c\u5927\u7d04\u8981 15~20 \u5206\u9418\u7684\u5efa\u7acb\u6642\u9593"),(0,i.kt)("li",{parentName:"ol"},"\u7b49 Replica B \u6e96\u5099\u5b8c\u6210\u5f8c\uff0c\u5c07\u6d41\u91cf\u5c0e\u5230 Replica B (Replica \u5347\u7d1a\u5b8c\u6210)"),(0,i.kt)("li",{parentName:"ol"},"\u9019\u6642 Replica A \u5df2\u7d93\u6c92\u6709\u4efb\u4f55\u6d41\u91cf\u4e86\uff0c\u5347\u7d1a Replica A (8 Cores -> 16 Cores)"),(0,i.kt)("li",{parentName:"ol"},"\u5347\u7d1a Master A (8 Cores -> 16 Cores)\uff0cMutation \u505c\u6a5f\u6642\u9593\u7d04 5 \u5206\u9418"),(0,i.kt)("li",{parentName:"ol"},"Master A \u5347\u7d1a\u5b8c\u6210\u5f8c\u522a\u9664 Replica A (Master \u5347\u7d1a\u5b8c\u6210)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scaling",src:a(3544).Z,width:"1337",height:"525"})),(0,i.kt)("p",null,"\u9019\u908a\u5176\u5be6\u6211\u5011\u591a\u505a\u4e86 Replica A \u7684\u5347\u7d1a\u7136\u5f8c\u53c8\u628a Replica A \u522a\u6389\u7684\u52d5\u4f5c\uff0c\u76ee\u7684\u662f\u7576\u6b65\u9a5f 5 \u7684 Master \u5347\u7d1a\u5931\u6557\u5f8c\uff0c\u6211\u5011\u80fd\u5920\u628a Replica A \u76f4\u63a5 Promote \u6210\u65b0\u7684 Master\uff0c\u4ee5\u964d\u4f4e\u98a8\u96aa\u3002"),(0,i.kt)("h4",{id:"\u90a3\u53ef\u4ee5\u76f4\u63a5\u5728\u6b65\u9a5f-5-\u5c31-promote-replica-a-\u6210\u70ba\u65b0\u7684-master\u7136\u5f8c\u518d\u628a\u6d41\u91cf\u5207\u904e\u53bb"},"\u90a3\u53ef\u4ee5\u76f4\u63a5\u5728\u6b65\u9a5f 5 \u5c31 Promote Replica A \u6210\u70ba\u65b0\u7684 Master\uff0c\u7136\u5f8c\u518d\u628a\u6d41\u91cf\u5207\u904e\u53bb?"),(0,i.kt)("p",null,"\u7531\u65bc\u9019\u908a\u7684\u5834\u666f\u90fd\u662f\u900f\u904e Streaming Replication \u4f86\u9032\u884c\u8cc7\u6599\u540c\u6b65\uff0c\u6240\u4ee5\u7576 Replica A \u8981 Promote \u6210\u70ba\u65b0\u7684 Master \u6642\uff0cMaster A \u8207 Replica A \u7684 Streaming Replication \u7684\u52d5\u4f5c\u5c31\u6703\u88ab\u4e2d\u6b62\uff0c\u6240\u4ee5\u5728 Replica A -> \u65b0 Master -> Master DB \u5207\u6d41\u91cf\u9019\u6bb5\u6642\u9593\u7684\u8cc7\u6599\u7570\u52d5\u5c07\u6703\u6d41\u5931\uff0c\u6240\u4ee5\u4e0d\u5efa\u8b70\u76f4\u63a5\u900f\u904e Promote \u7684\u65b9\u5f0f\u4f86\u8655\u7406\u3002"),(0,i.kt)("h2",{id:"zero-downtime-\u7684-vertical-scaling-\u7b56\u7565"},"Zero-downtime \u7684 Vertical Scaling \u7b56\u7565"),(0,i.kt)("p",null,"\u5ef6\u7e8c\u4e0a\u9762\u7684\u7b56\u7565\uff0c\u6211\u5011\u900f\u904e\u65b0\u589e Logical Replication \u7684\u6a5f\u5236\u5c31\u80fd\u9054\u5230 Zero-downtime \u7684\u76ee\u7684\u3002"),(0,i.kt)("p",null,"Zero-downtime \u7684\u6b65\u9a5f:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u76ee\u524d\u72c0\u6cc1\u662f\u6211\u5011\u6703\u6709\u4e00\u53f0 Master A(8 cores)\u8207\u4e00\u53f0 Replica A(8 cores)"),(0,i.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u53f0 Replica B(16 cores)\uff0c\u5927\u7d04\u8981 15~20 \u5206\u9418\u7684\u5efa\u7acb\u6642\u9593"),(0,i.kt)("li",{parentName:"ol"},"\u7b49 Replica B \u6e96\u5099\u5b8c\u6210\u5f8c\uff0c\u5c07 Replica B Promte \u6210 Master B"),(0,i.kt)("li",{parentName:"ol"},"Master A \u8a2d\u5b9a Logcial Replication \u5230 Master B"),(0,i.kt)("li",{parentName:"ol"},"\u5f9e Master B \u65b0\u589e\u4e00\u53f0 Replica B (16 cores)"),(0,i.kt)("li",{parentName:"ol"},"\u5c07 Read \u6d41\u91cf\u5f9e Replica A -> \u5207\u5230 Replica B (Replica \u5347\u7d1a\u5b8c\u6210)"),(0,i.kt)("li",{parentName:"ol"},"\u5c07 Mutation \u6d41\u91cf\u5f9e Master A -> \u5207\u5230 Master B (Master \u5347\u7d1a\u5b8c\u6210)"),(0,i.kt)("li",{parentName:"ol"},"\u522a\u9664 Master A \u8207 Replica A")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Logical-Scaling",src:a(9078).Z,width:"1183",height:"1393"})),(0,i.kt)("p",null,"\u9019\u500b\u7bc4\u4f8b\u53ea\u662f\u5347\u7d1a CPU/Memory\uff0c\u800c\u4e14\u5169\u500b Master \u4e4b\u9593\u7684 Schema \u4e5f\u90fd\u4e00\u81f4\uff0c\u4e26\u4e0d\u6703\u7522\u751f Logical Replication \u7684 Data Conflict \u7684\u554f\u984c\uff0c\u7b97\u662f\u6bd4\u8f03\u597d\u8655\u7406\u7684\u5834\u666f\uff0c\u5982\u679c\u53c8\u52a0\u4e0a\u8de8\u7248\u672c\u7684 Postgres \u8981\u8003\u616e\u7684\u60c5\u6cc1\u5c31\u6703\u66f4\u591a\u4e86\u3002"),(0,i.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,i.kt)("p",null,"\u96d6\u7136\u6211\u9019\u908a\u90fd\u662f\u62ff Vertical Scaling \u4f86\u8209\u4f8b\uff0c\u4f46\u9019\u4e9b\u7b56\u7565\u4e26\u975e\u53ea\u80fd\u7528\u5728\u63d0\u5347 CPU \u6216 Memory \u7684\u7528\u9014\uff0c\u53ea\u8981\u628a\u6b65\u9a5f\u7a0d\u5fae\u6539\u4e00\u4e0b\u4e5f\u80fd\u5c07\u9019\u4e9b\u7b56\u7565\u61c9\u7528\u65bc Postgres Upgrade/Migration \u7b49\u9700\u8981\u8f03\u9577\u6642\u9593\u7684\u5347\u7d1a\u3002"),(0,i.kt)("p",null,"Zero-downtime \u7684\u7b56\u7565\u96d6\u7136\u80fd\u5920\u9054\u5230\u4e0d\u505c\u6a5f\u7684\u76ee\u7684\uff0c\u4f46\u6240\u9700\u8981\u8655\u7406\u7684\u8a2d\u5b9a\u4e5f\u9060\u6bd4\u6709 downtime \u9084\u8981\u591a\u5f88\u591a\uff0c\u5718\u968a\u6700\u7d42\u6c7a\u5b9a\u5728\u591c\u6df1\u4eba\u975c\u7684\u6642\u5019\u76f4\u63a5\u8b93 Master downtime 5 \u5206\u9418 XD\u3002\u5e0c\u671b\u4e0b\u6b21\u6709\u6a5f\u6703\u628a\u9019\u4e9b\u7b56\u7565\u61c9\u7528\u5728 Postgre Upgrade \u4e2d\u4e26\u5b8c\u6210 Zero-downtime \u7684\u6210\u5c31\u3002"))}g.isMDXComponent=!0},9078:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/logical-scaling-6abaca55b58267e6fa572f664439dcf6.png"},2633:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/logical-936390b1989cc54f17ad71327d4a1ef0.png"},3970:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/scalingout-52949d393b8755686bdf3c94014c1354.png"},4527:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/scalingup-bba89a51088477b9c1286af115f4a5a8.png"},9844:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/streaming-d2b84bb530b145ae4b54824562b03c93.png"},3544:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/vertical1-39616272d03fe7981f9c1f9b5429f18e.png"}}]);
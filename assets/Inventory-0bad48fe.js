import{r as t,b as _,c as P,m as I,f as $,j as e,R as D,L as M,h as q,A as W,n as Y,l as H,e as L,y as V}from"./index-9e639871.js";import{T as J}from"./topbar-023ef40b.js";import{R as K}from"./index.esm-ce4f286d.js";import{c as X,a as Z}from"./index.esm-aea6df59.js";import{I as G}from"./index.esm-5da8491a.js";import{c as ee}from"./index.esm-a8dd76d8.js";import{c as se}from"./index.esm-454e2aad.js";import{b as te}from"./index.esm-464d6d75.js";import{I as ae}from"./InputPulie-644da27c.js";import{k as re,Q as F}from"./react-toastify.esm-d448b6f6.js";import{C as le}from"./Cookies-b386fc28.js";import{o as ie}from"./Ring-80592b21.js";import"./index.esm-fa390b8e.js";function ne({ParcelName:m,ReciverName:l,Adress:i,TrackingNumber:b,Courire:c,packageFee:r,Quantity:d,idParcel:u,getnewParcels:w,toEdite:C,deletedStatus:f,daysHeld:k,status:o,UserRole:g,SenderName:j,acceptStatus:y,OriginalUserId:x,idUser:a,idReshipper:v}){const h=_(),R=P(N=>N.DataBaseAreouSure.value),[A,E]=t.useState(""),T=async()=>{try{(await H.post(`${L.baseURL}/unaccept_parcel_mership2023`,{idParcel:u},{withCredentials:!0})).data==="Done"?(w(),y(!0),h(V(!1))):y(!1)}catch{y(!1)}};return t.useEffect(()=>{A!==""&&(R&&T(),E(""))},[R]),e.jsx(D.Fragment,{children:e.jsxs("article",{className:"flex bg-base-1 p-7 md:flex-col md:p-6 shadow-card rounded-2xl  downtoUPAnimeWithOpacity1 DowntoUpFloat articaleHolder",children:[e.jsxs("div",{className:"flex items-center justify-between xs:flex-col xs:items-start xs:gap-2",children:[e.jsx("a",{children:e.jsx("div",{className:"h-20 w-20 shrink-0 self-center rounded-full md:mr-5 md:h-13 md:w-13 md:self-start imgsmallsize12",children:e.jsx("img",{src:o[2],alt:"logo",className:"h-full w-full rounded-full border border-gray-100 p-[1px] duration-200 hover:border-secondary-1/70 sdfs67ddfg"})})}),e.jsx("div",{className:"hidden md:flex",children:e.jsxs("div",{className:"flex items-center gap-x-3 jsduy23",children:[e.jsx("div",{className:"flex flex-1 h-9 px-4 gap-x-1 justify-center items-center box-border rounded-full bg-gray-50 group-hover:bg-gray-75 transition duration-300",children:e.jsx("span",{className:"text-gray-100 group-hover:text-gray-150 tp-lead2 transition duration-300",children:"Eligible"})}),e.jsx("button",{className:"flex justify-center items-center gap-2 px-4 h-12 border-2 border-gray-100 hover:bg-base-2 active:bg-base-3 transition duration-200 px-4 h-9 px-0  px-0 w-9 h-9 rounded-xl py-0"})]})})]}),e.jsxs("div",{className:"ml-10 mr-6 flex min-w-0 flex-1 flex-col lg:ml-6 md:mx-0 md:mt-4 md:px-0 iegiy8297",children:[e.jsx("a",{children:e.jsx("div",{className:"flex min-w-0",children:e.jsx("h5",{className:"ellipsis tp-h5 text-gray-800 duration-200 hover:text-secondary-1",children:m})})}),e.jsxs("div",{className:"mt-3 flex flex-col gap-y-4 xl:mt-4 xl:flex-col xl:gap-y-4",children:[e.jsxs("div",{className:"flex gap-x-6 md:flex-col md:items-start md:gap-y-3 lkjasdh34",children:[e.jsx("a",{target:"_blank",className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full ",children:e.jsxs("div",{className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full",children:[e.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100/30 transition duration-300 group-hover:bg-gray-75",children:e.jsx(ee,{color:"#A9A9AD"})}),e.jsxs("div",{className:"flex min-w-0 flex-col",children:[e.jsx("span",{className:"tp-lead1 text-gray-300",children:a===x?"Receiver Name":e.jsx(D.Fragment,{children:g==="C"&&x!==v?"Receiver Name":"Sender Name"})}),e.jsx("span",{className:"tp-h7 ellipsis text-text-1 transition-all duration-300 hover:text-secondary-1",children:a===x?l:e.jsx(D.Fragment,{children:g==="C"&&x!==v?l:j})})]})]})}),e.jsx("a",{target:"_blank",className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full ",children:e.jsxs("div",{className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full",children:[e.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100/30 transition duration-300 group-hover:bg-gray-75",children:e.jsx(se,{color:"#A9A9AD"})}),e.jsxs("div",{className:"flex min-w-0 flex-col",children:[e.jsx("span",{className:"tp-lead1 text-gray-300",children:"Address"}),e.jsx("span",{className:"tp-h7 ellipsis text-text-1 transition-all duration-300 hover:text-secondary-1",children:i})]})]})}),e.jsx("div",{target:"_blank",className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full "}),e.jsx("div",{target:"_blank",className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full ",children:e.jsx("div",{className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full",children:e.jsxs("div",{className:"flex min-w-0 flex-col",children:[e.jsx("span",{className:"tp-lead1 text-gray-300",children:"Tracking Number"}),e.jsx("span",{className:"tp-h7 ellipsis text-text-1 transition-all duration-300",children:b})]})})}),e.jsx("div",{className:"group flex min-w-0 items-center justify-center gap-x-2 md:max-w-full",children:e.jsxs("div",{className:"flex min-w-0 flex-col",children:[e.jsx("span",{className:"tp-lead1 text-gray-300",children:"Days Held"}),e.jsxs("span",{className:"tp-h7 ellipsis text-text-1 transition-all duration-300",children:[k<1?"1":k," Day"]})]})})]}),e.jsx("div",{className:"flex gap-x-6 xl:flex-col-reverse xl:gap-y-6 sjkfgh9483",children:e.jsxs("div",{className:"flex items-center gap-x-6 xs:flex-col xs:items-start xs:gap-y-4 spliterdownCard123",children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx("span",{className:"tp-lead1 text-gray-300 aksdfhgj8",children:"Status"}),e.jsxs("span",{className:"tp-h7 text-text-1",style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{className:o[0]})," ",o[1]]})]}),e.jsxs("div",{className:"TheTowinCard",style:{marginRight:"20px"},children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx("span",{className:"tp-lead1 text-gray-300",children:"Package Fee"}),e.jsxs("span",{className:"tp-h7 text-text-1",children:[r,"$"]})]}),e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx("span",{className:"tp-lead1 text-gray-300",children:"Quantity"}),e.jsxs("span",{className:"tp-h7 text-text-1",children:[d," Package"]})]})]})]})})]})]}),e.jsxs("div",{className:"flex flex-col justify-between md:w-full md:gap-y-6 skljfo93",children:[e.jsx("div",{className:"md:hidden",children:e.jsx("div",{className:"flex items-center gap-x-3",style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{className:"flex flex-1 h-9 px-4 gap-x-1 justify-center items-center box-border rounded-full group-hover:bg-gray-75 transition duration-300 bg-gray-50ADd",style:{display:"none"},children:[e.jsx(te,{}),e.jsx("span",{className:" group-hover:text-gray-150 tp-lead2 transition duration-300",children:"Edit"})]})})}),e.jsx("a",{className:"button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-6 xs:px-5 py-0 button-secondary w-[9.5rem] self-end md:mt-6",type:"submit",onClick:()=>{h(q(C)),h(W()),h(Y("INV"))},children:e.jsx("span",{className:" z-10 tp-h6 xs:tp-h7 !tp-h7 xs:!tp-lead2",children:g==="R"&&x!==a?"Edit":"Details"})})]})]})})}function ce({remove:m,expectedSetect:l,newGetParcels:i}){return e.jsx("div",{className:"justforRemove",onClick:m,children:e.jsx("div",{className:"cardProfil",children:e.jsx("div",{className:"OutsideofFloating1",children:e.jsxs("div",{className:"couvertureProfil",children:[e.jsx("button",{className:"button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard",type:"submit",onClick:()=>{i("ReciverName",l==="animated-div"?"Reshipped":"")},children:e.jsx("span",{className:" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300",children:"Receiver Name"})}),e.jsx("button",{className:"button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard",type:"submit",onClick:()=>{i("Address",l==="animated-div"?"Reshipped":"")},children:e.jsx("span",{className:" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300",children:"Address"})}),e.jsx("button",{className:"button group h-12 xs:h-11 rounded-2xl xs:rounded-xl px-4 py-0 button-text group w-full shrink-0 !justify-start !gap-x-2.5 !rounded-xl !p-3.5 transition-all duration-300 hover:bg-gray-50 hovergrayCard",type:"submit",onClick:()=>{i("Price",l==="animated-div"?"Reshipped":"")},children:e.jsx("span",{className:" z-10 tp-h6 xs:tp-h7 tp-hnn xs:!tp-lead2 -mb-0.5 !text-text-2 !-mb-0 group-hover:!text-gray-800 transition duration-300",children:"Package Fee"})})]})})})})}function be(){const[m,l]=t.useState(!1),[i,b]=t.useState("animated-divToFist"),[c,r]=t.useState([]),[d,u]=t.useState([]),[w,C]=t.useState(!1),[f,k]=t.useState(""),o=_(),g=()=>{l(!m)},j=()=>{l(!1)},y=()=>{b("animated-div"),u([]),r([]),a("","Reshipped")},x=()=>{b("animated-divToFist"),u([]),r([]),a("","false")},a=async(s,n)=>{try{C(!0);const p=await H.post(`${L.baseURL}/get_allInventoryParcels`,{filter:s,Comingstatus:n},{withCredentials:!0});u([]),r([]),u(p.data.parcels||[])}catch{F.error("Something went wrong!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}finally{C(!1)}},v=P(s=>s.UpdateInvParcel.value);t.useEffect(()=>{v&&a(),o(I(!1))},[v]);const h=P(s=>s.UserRole.value),R=new le,A=P(s=>s.UpdateExpParce.value),[E,T]=t.useState("");t.useEffect(()=>{const s=R.get("xml");s&&(o($(s.Role)),T(s.Id)),a()},[]),t.useEffect(()=>{A&&a("",i==="animated-div"?"Reshipped":""),o(I(!1))},[A]);const N=(s,n)=>{s.forEach((p,B)=>{setTimeout(()=>{r(Q=>[...Q,p])},B*n)})};t.useEffect(()=>{N(d,300)},[d]);const S={Processing:["yellow-dot","Processing","https://i.pinimg.com/originals/62/98/f3/6298f37962ae37912b178a5fd86ec97e.png"],Received:["blue-dot","Received","https://i.pinimg.com/originals/60/fd/53/60fd5307484024e1b3439fd3d40b4e26.png"],Declined:["red-dot","Declined","https://i.pinimg.com/originals/9e/db/d8/9edbd8033913ff4a8d3fdba8b40e384d.png"],Reshipped:["green-dot","Reshipped","https://i.pinimg.com/originals/10/6e/41/106e41b0ed0e0116c6f57d2eb7136ad6.png"]},z=(s,n)=>s==="Received"?S.Received:s==="Declined"?S.Declined:s==="Reshipped"?S.Reshipped:S.Processing;t.useEffect(()=>{if(f.split()!==""){r(d);const s=d.filter(n=>n.Name_on_Parcel.toLowerCase().includes(f.toLowerCase()));r(s||[])}else r(d)},[f]);const O=s=>{s?F.success("Parcel unaccepted successfully",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):F.error("Something went wrong!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},U=()=>{const p=c.length;return p*240+(p-1)*6};return e.jsxs(D.Fragment,{children:[m&&e.jsx("div",{onClick:g,className:"justforRemove1",children:e.jsx("div",{className:"sortByCardHolder",children:e.jsx(ce,{remove:j,newGetParcels:a,expectedSetect:i})})}),e.jsx(J,{currentPage:"Inventory",oldPage:""}),e.jsxs("div",{className:"DashParent1",children:[e.jsxs("div",{onClick:j,className:"mb-8 flex justify-between gap-x-2 lg:flex-col lg:gap-y-3 slide-inFromRight respoinv1",children:[e.jsxs("div",{className:"flex p-1 rounded-2xl bg-gray-50 h-15 lg:h-14 xs:h-13 box-border relative w-[18.75rem] lg:w-full respo2",children:[e.jsx("span",{className:"absolute top-1 left-0 w-10 rounded-2xl bg-base-1"}),e.jsx("div",{className:"flex relative z-10 flex-1 gap-x-3 justify-center items-center px-3 lg:px-2 cursor-pointer rounded-2xl xs:rounded-[14px] asd23gDF bg-base-1 "+i,id:"myDiv"}),e.jsx(M,{onClick:x,className:"flex relative z-10 flex-1 gap-x-3 justify-center items-center px-3 lg:px-2 cursor-pointer rounded-2xl xs:rounded-[14px] ",children:e.jsx("span",{className:"tp-lead4 lg:tp-lead5 xs:tp-lead1 text-center ",children:"Inventory"})}),e.jsx("div",{onClick:y,className:"flex relative z-10 flex-1 gap-x-3 justify-center items-center px-3 lg:px-2 cursor-pointer rounded-2xl xs:rounded-[14px] ",children:e.jsx("span",{className:"tp-lead4 lg:tp-lead5 xs:tp-lead1 text-center",children:"Reshipped"})})]}),e.jsx("div",{className:"flex flex-1 gap-x-2",children:e.jsx("div",{className:"relative flex-1",style:{height:"60px"},children:e.jsx(ae,{placeHolder:"Search in expected delivery using name of parcel!",bgColor:"#F4F4F4",valController:f,onChangeController:s=>k(s.target.value),svgLogo:e.jsx(K,{size:"1.4rem",color:"#A9A9AD",style:{marginRight:"5px"}})})})})]}),e.jsxs("div",{className:"mt-4 flex gap-y-3 lg:mt-2 lg:flex-col lg:gap-y-0 lg:py-0 slide-inFromRight resposortby",children:[e.jsxs("div",{onClick:j,className:"flex flex-1 items-center self-start py-4 lg:w-full respoline",children:[e.jsxs("span",{className:"tp-lead5 shrink-0 text-gray-300 lg:hidden",children:[c.length," Results Found!"]}),e.jsx("span",{className:"mr-4 ml-3 h-0.5 w-full gap-x-5 bg-gray-100 lg:mx-0 "})]}),e.jsxs("div",{className:"group transition-all duration-30 shrink-0 self-center css-b62m3t-container",children:[e.jsx("span",{id:"react-select-118-live-region",className:"css-7pg0cj-a11yText"}),e.jsx("span",{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text",className:"css-7pg0cj-a11yText"}),e.jsxs("div",{onClick:g,className:"flex items-center px-6 md:!px-3 group cursor-pointer h-14 lg:h-13 xs:h-12 box-border rounded-2xl xs:rounded-[14px] border-2 border-gray-150 transition duration-300 hover:bg-gray-50 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl border-none css-0 grayHover respoline",children:[e.jsx(X,{size:"18px",color:"#A9A9AD"}),e.jsx("div",{className:"text-gray-300 mx-3 justify-start items-center grid css-0",children:e.jsx("div",{className:"clear-both overflow-hidden !ml-0 !text-gray-300 whitespace-nowrap tp-lead4 xs:tp-lead5 group group-hover:!text-gray-400 transition duration-300 !tp-lead5 !tp-lead5 lg:!tp-lead1 xs:!tp-body2 css-1jqq78o-placeholder",id:"react-select-118-placeholder",children:"Sort by"})}),e.jsx("div",{className:" css-1wy0on6",children:e.jsx("div",{className:"flex items-center justify-center !p-0 css-1xc3v61-indicatorContainer","aria-hidden":"true",children:e.jsx(G,{color:"#A9A9AD"})})})]})]})]}),e.jsx("div",{className:"mt-6 flex flex-col lg:mt-4",children:e.jsx("div",{className:"flex flex-1 flex-col",children:e.jsxs("div",{className:"flex flex-col gap-y-6 maxwithog",style:{height:`${U()}px`},children:[w&&e.jsx("div",{style:{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"50px"},children:e.jsx(ie,{size:35,lineWeight:5,speed:1.5,color:"#6499E9"})}),c.length===0&&!w?e.jsxs("div",{className:"mt-16 mb-28 flex flex-col items-center justify-center",children:[e.jsx(Z,{size:"9rem",color:"#E8E8E9"}),e.jsx("span",{className:"tp-display1 mt-3",children:"List is Empty"})]}):"",c==null?void 0:c.map((s,n)=>e.jsx(ne,{idUser:s.idUser,OriginalUserId:E,idReshipper:s.Id_Reshipper,id:s.idOrder,idParcel:s.idOrder,ParcelName:s.Name_on_Parcel,ReciverName:s.ReciverName,Adress:s.ReshipperAddress,TrackingNumber:s.Tracking_Number,Courire:s.Courier,packageFee:s.Price,Quantity:s.Quantity,getnewParcels:a,toEdite:s,SenderName:s.Sender_Name,daysHeld:s.Days_held,status:z(s.Status),UserRole:h,acceptStatus:O},n))]})})})]}),e.jsx(re,{})]})}export{be as default};

import{j as s,B as m}from"./index-BoQdX_lq.js";import{u as l,a as o,C as g,H as n,L as r,b as c,T as d,I as p}from"./LandingPage-CtP8fewn.js";const b="/animal-shelter/assets/cat-mob-DdDbIfX_.png",x="/animal-shelter/assets/big-dog-mob-CJuVNZGu.png",h="/animal-shelter/assets/little-dog-mob-R8YUWAMa.png",u="/animal-shelter/assets/cat-des-B824mw7s.png",f="/animal-shelter/assets/big-dog-des-CTivg3wR.png",j="/animal-shelter/assets/little-dog-des-BwWVGSqf.png",D=[{images:{mob:h,lg:j}},{images:{mob:b,lg:u}},{images:{mob:x,lg:f}}],C=()=>{const{t}=l(),a=o();return s.jsx(m,{as:"section",id:"terms",pb:{base:"40px",sm:"60px",md:"100px",lg:"185px"},children:s.jsxs(g,{children:[s.jsxs(n,{variant:"sectionHeading",mb:{base:3,md:16},children:[t("terms.heading")," "]}),s.jsx(r,{display:"flex",flexDirection:{base:"column",md:"row"},gap:{base:6,md:2},justifyContent:{md:"space-between"},children:D.map((i,e)=>s.jsxs(c,{display:"flex",flexDirection:a!=="mobile"&&e!==1?"column":"column-reverse",alignItems:{base:"center"},gap:3,w:{base:"327px",md:"306px",lg:"425px"},justifyContent:{md:"space-between"},children:[s.jsxs(m,{children:[s.jsx(n,{as:"h3",variant:"subTitle",mb:{base:3,md:4},children:t(`terms.items.${e}.title`)}),s.jsx(d,{fontSize:{md:"20px",lg:"24px"},fontWeight:{md:400,lg:700},children:t(`terms.items.${e}.description`)})]}),s.jsx(p,{src:a==="desktop"?i.images.lg:i.images.mob,alt:t(`terms.items.${e}.title`)})]},e))})]})})};export{C as default};

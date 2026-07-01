import{n as e}from"./joinUrl-crFTJinF.js";import{t}from"./jsx-runtime-BFqoZbY3.js";import{n,s as r}from"./CategoryHeading-CAcbeXwK.js";import{b as i}from"./DropdownMenu-4FR3KDii.js";import{t as a}from"./SchemaView-43cSPr0N.js";import{c as o,o as s,s as c}from"./openapi-F-ik4CDL.js";import{n as l,r as u,t as d}from"./Collapsible-qT_XLUD5.js";import{t as f}from"./Toc-CrXnCC7Y.js";import{t as p}from"./Button-C2Y51aF1.js";import{t as m}from"./slugify-DxorHtDJ.js";import{c as h,l as g}from"./Item-BBowNmr7.js";var _=t(),v=c(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function y(){let{input:t,type:c,versions:y,version:b,options:x}=s(),{data:S}=e(o(v,{input:t,type:c})),C=S.schema.title,w=S.schema.components?.schemas??[],T=Object.entries(y).length>1,E=x?.showVersionSelect===`always`||T&&x?.showVersionSelect!==`hide`;return w.length?(0,_.jsxs)(`div`,{className:`grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,_.jsx)(g,{name:`category`,children:C}),(0,_.jsxs)(r,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),(0,_.jsxs)(`div`,{className:`pt-(--padding-content-top) pb-(--padding-content-bottom)`,children:[(0,_.jsx)(h,{title:C,heading:`Schemas`,headingId:`schemas`}),(0,_.jsx)(`hr`,{className:`my-8`}),(0,_.jsx)(`div`,{className:`flex flex-col gap-y-5`,children:w.map(e=>(0,_.jsxs)(d,{className:`group`,defaultOpen:!0,children:[(0,_.jsxs)(n,{registerNavigationAnchor:!0,level:2,className:`flex items-center gap-1 justify-between w-fit`,id:m(e.name),children:[e.name,` `,(0,_.jsx)(u,{asChild:!0,children:(0,_.jsx)(p,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,_.jsx)(i,{size:16,className:`group-data-[state=open]:rotate-90 transition cursor-pointer`})})})]}),(0,_.jsx)(l,{className:`mt-4 CollapsibleContent`,children:(0,_.jsx)(a,{schema:e.schema,hideRootRef:!0})})]},e.name))})]}),(0,_.jsx)(f,{entries:w.map(e=>({id:m(e.name),text:e.name,depth:1}))})]}):(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(r,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),`No schemas found`]})}export{y as SchemaList};
//# sourceMappingURL=SchemaList-DRsytQOP.js.map
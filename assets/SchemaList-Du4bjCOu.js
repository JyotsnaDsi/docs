import{n as e}from"./joinUrl-crFTJinF.js";import{t}from"./jsx-runtime-BFqoZbY3.js";import{n,s as r}from"./CategoryHeading-C1JHL9BM.js";import{b as i}from"./DropdownMenu-D4ChO4vc.js";import{t as a}from"./SchemaView-BR4sEovy.js";import{c as o,o as s,s as c}from"./openapi-B-bSYfuT.js";import{t as l}from"./Toc-DW2c3HpL.js";import{t as u}from"./Button-CgNGgjJt.js";import{n as d,r as f,t as p}from"./Collapsible-B85Vroh5.js";import{t as m}from"./slugify-DwFz4Idx.js";import{c as h,l as g}from"./Item-BrwKn-RZ.js";var _=t(),v=c(`
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
`);function y(){let{input:t,type:c,versions:y,version:b,options:x}=s(),{data:S}=e(o(v,{input:t,type:c})),C=S.schema.title,w=S.schema.components?.schemas??[],T=Object.entries(y).length>1,E=x?.showVersionSelect===`always`||T&&x?.showVersionSelect!==`hide`;return w.length?(0,_.jsxs)(`div`,{className:`grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,_.jsx)(g,{name:`category`,children:C}),(0,_.jsxs)(r,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),(0,_.jsxs)(`div`,{className:`pt-(--padding-content-top) pb-(--padding-content-bottom)`,children:[(0,_.jsx)(h,{title:C,heading:`Schemas`,headingId:`schemas`}),(0,_.jsx)(`hr`,{className:`my-8`}),(0,_.jsx)(`div`,{className:`flex flex-col gap-y-5`,children:w.map(e=>(0,_.jsxs)(p,{className:`group`,defaultOpen:!0,children:[(0,_.jsxs)(n,{registerNavigationAnchor:!0,level:2,className:`flex items-center gap-1 justify-between w-fit`,id:m(e.name),children:[e.name,` `,(0,_.jsx)(f,{asChild:!0,children:(0,_.jsx)(u,{variant:`ghost`,size:`icon`,className:`size-6`,children:(0,_.jsx)(i,{size:16,className:`group-data-[state=open]:rotate-90 transition cursor-pointer`})})})]}),(0,_.jsx)(d,{className:`mt-4 CollapsibleContent`,children:(0,_.jsx)(a,{schema:e.schema,hideRootRef:!0})})]},e.name))})]}),(0,_.jsx)(l,{entries:w.map(e=>({id:m(e.name),text:e.name,depth:1}))})]}):(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(r,{children:[(0,_.jsxs)(`title`,{children:[`Schemas `,E?b:``]}),(0,_.jsx)(`meta`,{name:`description`,content:`List of schemas used by the API.`})]}),`No schemas found`]})}export{y as SchemaList};
//# sourceMappingURL=SchemaList-Du4bjCOu.js.map
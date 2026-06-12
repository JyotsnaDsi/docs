import{t as e}from"./useQuery-Dc4HV5Mo.js";import{c as t,o as n,s as r}from"./openapi-B-bSYfuT.js";var i=r(`
  query SchemaWarmup($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      openapi
    }
  }
`),a=()=>{let{input:r,type:a}=n();e({...t(i,{input:r,type:a}),enabled:typeof window<`u`,notifyOnChangeProps:[]})};export{a as t};
//# sourceMappingURL=useWarmupSchema-DLBsXMFX.js.map
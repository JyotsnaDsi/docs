import{t as e}from"./useQuery-Ca8bqGMt.js";import{c as t,o as n,s as r}from"./openapi-1fTNQfaW.js";var i=r(`
  query SchemaWarmup($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      openapi
    }
  }
`),a=()=>{let{input:r,type:a}=n();e({...t(i,{input:r,type:a}),enabled:typeof window<`u`,notifyOnChangeProps:[]})};export{a as t};
//# sourceMappingURL=useWarmupSchema-D6lSY7Ej.js.map
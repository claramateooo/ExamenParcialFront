import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";import { PropertySignature } from "https://deno.land/x/ts_morph@21.0.1/ts_morph.js";

type contact={
    name:string;
    email:string;
}

type Data={
    name:string;
    arrcontact:contact[]
}
export const handler:Handlers={
   POST: async (req:Request,ctx:FreshContext)=>{
      try{
         const form=await req.formData();
        const data={
            name:form.get("Name"),
            email:form.get("Email"),

         };
     

         return new Response("",{
            status:383,
            headers:{
                "Location ":"/",
            },
         });
        } catch(error){
            return new Response (error.message,{
                status:500,
            });
        }
    
    },
};
const Page=(props:PageProps<Data>)=>{
    return(
        <body>
        <div>
          <h1>
            <a href="/agendacsr">
              <button type="click">Agenda Client Side</button>
            </a>
            <a href="/agendassr">
              <button type="click">Agenda Server Side</button>
            </a>
          </h1>
          <h2>
            My Agenda
          </h2>
        </div>
        <div>
            <form method="get">
                <input type="text" name="Name" />
                <input type="text" name="Name" />
                <button type="submit">Add contact</button>
            </form>
        </div>
        </body>
    )
}
export default Page;
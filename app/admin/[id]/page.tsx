import QueryHandler from "@/components/admin/Query/QueryHandler";
import prisma from "@/lib/db";


async function getQueryById(id:string){
    try {
        const response:any = await prisma.queries.findUnique({
            where:{
                id: id
            }
        });
         return {
             result: response,
             error:null
         }
    }catch (e){
        console.log(e)
        return {
            result: null,
            error: e
        }
    }
}

const  page=async ({params}:{params:Promise<{id:string}>})=>{
    const {id} = await params;

    const response = await getQueryById(id);

    const {result, error} = response;

    if(error){
        return (
            <>
            </>
        )
    }

    return (
        <>
            <QueryHandler data={result} />
        </>
    )
}
export default page;
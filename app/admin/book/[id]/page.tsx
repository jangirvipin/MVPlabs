import BookHandler from "@/components/admin/Book/BookHandler";
import prisma from "@/lib/db";

async function getBookById(id:string){
    try {
        const response:any = await prisma.book.findUnique({
            where:{id:id},
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

    const response = await getBookById(id);

    const {result, error} = response;

    if(error){
        return (
            <>
            </>
        )
    }

    return (
        <>
            <BookHandler data={result} />
        </>
    )
}
export default page;
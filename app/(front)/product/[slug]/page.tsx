import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {

    const product = data.products.find((x) => x.slug === params.slug);
    if(!product){
        return <div>Product not found</div>
    }

    return (
        <>
        <div className="my-2">
            <Link href="/">back to products</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
            <Image 
            
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
                width:"100%",
                height:"auto"
            }}     
            />

        </div>    
        </>
    )
}

import './Style.css'
export default function Image( ){
    return (
        <div className="cont h-[90vh] flex justify-center items-center w-[600px] gap-[10px] mx-auto">
        <div className=" hover:flex-1 basis-0 img hover:cursor-pointer hover:rounded-[10px] rounded-lg">
            <img src="/p1 (1).jpg" alt="p1" className="relative h-[300px] object-cover"/> 
        </div>
        <div className="hover:flex-1 basis-0 img hover:cursor-pointer hover:rounded-[10px] rounded-lg">
            <img src="/p2.jpg" alt="p1" className="relative h-[300px] object-cover"/>
        </div>
        <div className="hover:flex-1 basis-0 img hover:cursor-pointer hover:rounded-[10px] rounded-lg">
            <img src="/p3.jpg" alt="p1" className="relative h-[300px] object-cover"/>
        </div>
        <div className="hover:flex-1 basis-0 img hover:cursor-pointer hover:rounded-[10px] rounded-lg">
            <img src="/p4.jpg" alt="p1" className="relative h-[300px] object-cover"/>
        </div>
        <div className="hover:flex-1 basis-0 img hover:cursor-pointer hover:rounded-[10px] rounded-lg">
            <img src="/p5.jpg" alt="p1" className="relative h-[300px] object-cover"/>
        </div>
    </div>
    )
}
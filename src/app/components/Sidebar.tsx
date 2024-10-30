import Searchbar from "./Searchbar"


export default function Sidebar() {
    return (
        <div className="flex min-h-screen w-full max-w-[420px] flex-col gap-[60px] p-5 shadow-custom z-10">
            <div className="flex flex-col gap-5">
                <Searchbar />
                
                <div>
                    <p className="text-2xl text-white">Recently viewed</p>
                </div>
            </div>

            <div>
                <p className="text-2xl text-white">Coming soon</p>
            </div>
        </div>
    );
}

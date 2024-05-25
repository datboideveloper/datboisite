
function Footer() {
    return (
        <div id="footer" className="text-center min-h-[100vh] py-28 relative">
            <div className="text-3xl max-w-[60%] mx-auto pb-8">
                Dat Boi Is Waiting For You!                  
            </div>
            <a href="https://t.me/datboibase"  target="_blank" className="text-3xl px-8 py-2 bg-green-800 rounded-lg border-solid mx-auto
                 border-black border-[1px] opacity-70 hover:opacity-100">
                    Join Now
            </a>
            <div className="bg-gray-600 bg-opacity-50 max-w-[60%] mx-auto hover:bg-opacity-70 hover:scale-110 
                absolute bottom-5 left-0 right-0 rounded-lg border-white border-2">
                @2024 by Dat Boi Society. All rights reserved!
            </div>
        </div>
    )
}

export default Footer;

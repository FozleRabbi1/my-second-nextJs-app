import Image from "next/image";

export const metadata = {
    title: "All-Shoes Page"
}

const AllShoesPage = async () => {
    const res = await fetch("http://localhost:5000/shoes", {
        cache: "no-store"
    })
    const shoes = await res.json()

    return (
        <div>
            <h2 className="text-3xl text-center">All shoes</h2>

            <div className="grid grid-cols-3 gap-14 px-10">
                {
                    shoes.map(shoe => <div
                        className="card bg-base-100  shadow-xl"
                        key={shoe.id} >
                        <figure>
                            <Image
                                width={500}
                                height={500}
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {shoe.title}
                                <div className="badge badge-secondary">{shoe.price} <span className="italic">$</span></div>
                            </h2>
                            <p>{shoe.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm w-[100px] btn-outline btn-primary">By Now</button>
                                <button className="btn btn-sm w-[100px] btn-outline btn-secondary">Details</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default AllShoesPage;
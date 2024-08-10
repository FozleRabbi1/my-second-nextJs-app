export const metadata = {
  title: "Home Page",
  description: "This is home page"
}

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();

  return (
    <div>
      <h2 className='text-3xl text-center'>This is home page</h2>

      <div className="grid grid-cols-3 gap-14 px-10">
        {
          shoes.slice(0, 3).map(shoe => <div
            className="card bg-base-100  shadow-xl"
            key={shoe.id} >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{shoe.description}</p>
              <p>Price : {shoe.price} <span className="italic">$</span></p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          )
        }
      </div>


    </div>
  );

};

export default HomePage;
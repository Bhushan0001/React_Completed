function ErrorMessage({Items}) {
//    let foodItems = props.Items;
  return (
    <>
        {Items.length===0 ? <h3>I am still hungry </h3> : null}
        {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}
    </>
  );
}

export default ErrorMessage
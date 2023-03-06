import React from 'react';

function PetCard(props) {
  let pet = props.singlePetCard;
  let displayedName = pet.name;
  const handleClick = function () {
    props.adoptCallback(displayedName);
  }
  if (pet.adopted) {
    displayedName = displayedName + " (Adopted)";
  }
  return (
    <div className="card" onClick={handleClick}>
      <img className="card-img-top" src={pet.img} alt={pet.name} />
      <div className="card-body">
        <h3 className="card-title">{displayedName}</h3>
        <p className="card-text">{pet.sex + " " + pet.breed}</p>
      </div>
    </div>
  )
}

export default function PetList(props) {
  let petArr = props.pets;
  let renderSinglePet = petArr.map((e) => {
    return (
      <PetCard singlePetCard={e} key={e.name} adoptCallback={props.adoptCallback}/>
    )
  })
  return (
    <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {renderSinglePet}
      </div>
    </div>
  )
}

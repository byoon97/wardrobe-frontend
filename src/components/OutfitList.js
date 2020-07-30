import React from "react";
import OutfitCard from "../components/OutfitCard";

export default class OutfitList extends React.Component {
  render() {
    return (
      <section className="py-8 px-4">
        <h2 className="text-3xl mb-2 font-heading font-semibold">
          Your Outfits
        </h2>
        <div className="flex flex-wrap -mx-4 mb-8"></div>

        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border-t px-2 py-2" scope="col">
                Day
              </th>
              <th className="border-t px-2 py-2" scope="col">
                Category
              </th>
              <th className="border-t px-2 py-2" scope="col">
                Description
              </th>
              <th className="border-t px-2 py-2" scope="col">
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.outfits.map((outfit) => (
              <OutfitCard
                key={outfit.id}
                {...outfit}
                handleSelectedOutfit={this.props.handleSelectedOutfit}
                deleteOutfit={this.props.deleteOutfit}
              />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

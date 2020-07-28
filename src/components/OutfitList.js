import React from 'react'
import { ReactComponent } from '*.svg';

export default class OutfitList extends React.Component {

    render() {
        <section class="py-8 px-4">
        <h2 class="text-3xl mb-2 font-heading font-semibold">Your Outfits</h2>
        <div class="flex flex-wrap -mx-4 mb-8">
      
        </div>
      
        <table class="w-full table-auto">
          <thead>
            <tr><th class="border-t px-2 py-2" scope="col">Day</th><th class="border-t px-2 py-2" scope="col">Category</th><th class="border-t px-2 py-2" scope="col">Description</th>
            </tr></thead>
          <tbody>
            <tr>
              <td class="border-t px-2 py-2">S</td>
              <td class="border-t px-2 py-2"><a href="#"><img class="inline-block mr-2 rounded-full" src="placeholders/pictures/male_avatar.svg" alt="" height="40" width="40"/> Nike Off White Sports Bra</a></td>
              <td class="border-t px-2 py-2">Light blue sports bra</td>
              <td class="border-t px-2 py-2">Sports</td>
              <td class="text-center border-t px-2 py-2"><a class="text-blue-700 hover:underline" href="#">edit</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    }

}
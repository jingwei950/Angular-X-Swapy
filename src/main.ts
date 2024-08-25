import { Component, ElementRef, viewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { createSwapy } from 'swapy';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div #container class="container grid grid-cols-3 p-2 gap-2">
  <div class="col-span-2 bg-gray-300 rounded-lg" data-swapy-slot="1">
    <div class="w-full h-full p-2 rounded-lg bg-red-500" data-swapy-item="content1">
      content 1
    </div>
  </div>

  <div class="col-span-1 bg-gray-300 rounded-lg" data-swapy-slot="2">
    <div class="w-full h-full p-2 rounded-lg bg-green-500 " data-swapy-item="content2">
      content 2
    </div>
  </div>

  <div class="col-span-1 bg-gray-300 rounded-lg" data-swapy-slot="3">
    <div class="w-full h-full p-2 rounded-lg bg-blue-500" data-swapy-item="content3">
      content 3
    </div>
  </div>
  <div class="col-span-2 bg-gray-300 rounded-lg" data-swapy-slot="4">
    <div class="w-full h-full p-2 rounded-lg bg-yellow-500 " data-swapy-item="content4">
      content 4
    </div>
  </div>
</div>
  `,
})
export class App {
  name = 'Angular';

  container = viewChild<ElementRef>('container');

  ngOnInit() {
    const swapy = createSwapy(this.container()?.nativeElement, {
      animation: 'dynamic', // or spring or none
    });
    // You can disable and enable it anytime you want
    swapy.enable(true);

    // On Swap
    swapy.onSwap((event) => {
      console.log(event.data.object);
      console.log(event.data.array);
      console.log(event.data.map);
    })
  }
}

bootstrapApplication(App);

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [        // Se declaran los compoenetes que sera utilizados en el codigo.
        HeroeComponent,
        ListadoComponent
    ],
    exports: [            // En esta parte puedo poner lo que quiero que sea publico o visible fuera de este modulo.
        ListadoComponent
    ],
    imports: [            //En los imports usualmente solo van modulos,
        CommonModule        
    ]
})
export class HeroesModule {}
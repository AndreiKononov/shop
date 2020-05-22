import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit, OnDestroy
} from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductCommunicatorService } from '../../services/product-communicator.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductComponent implements OnInit, OnDestroy {

    @Input()
    product: Product;

    @Output()
    buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

    private sub: Subscription;

    constructor(
        public communicator: ProductCommunicatorService,
        private cd: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.sub = this.communicator.channel$.subscribe((data) => {
            if (data.id === this.product.id) {
                this.cd.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBuyProduct() {
        this.buyProduct.emit(this.product);
    }
}

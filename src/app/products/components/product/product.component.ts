import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductCommunicatorService } from '../../services/product-communicator.service';
import { AppSettings } from '../../../core/services';
import { AppSettingsModel } from '../../../core/models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit, OnDestroy {
    @Input() product: Product;
    @Input() editable: boolean;
    @Output() buyProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() goToProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() editProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
    private sub: Subscription;
    isDarkTheme: boolean;

    constructor(
        public communicator: ProductCommunicatorService,
        private cd: ChangeDetectorRef,
        private appSettings: AppSettings,
    ) {}

    ngOnInit(): void {
        this.sub = this.communicator.channel$.subscribe((data) => {
            if (data.id === this.product.id) {
                this.cd.detectChanges();
            }
        });
        this.setIsDarkTheme(this.appSettings.settings);
        this.appSettings.channel$.subscribe(this.setIsDarkTheme.bind(this));
    }

    setIsDarkTheme(settings: AppSettingsModel): void {
        this.isDarkTheme = settings.THEME === 'DARK';
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBuyProduct() {
        this.buyProduct.emit(this.product);
        console.log('Buy ' + this.product.id);
    }

    onGoToProduct() {
        this.goToProduct.emit(this.product);
    }

    onEditProduct() {
        this.editProduct.emit(this.product);
    }

    onDeleteProduct() {
        this.deleteProduct.emit(this.product);
    }
}

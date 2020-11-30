import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { ThemeUpdateComponent } from 'src/app/modules/admin/AdminUpdates/theme-update/theme-update.component';
import { ProductionCompaniesUpdateComponent } from 'src/app/modules/admin/AdminUpdates/production-companies-update/production-companies-update.component';
import { VendorsUpdateComponent } from 'src/app/modules/admin/AdminUpdates/vendors-update/vendors-update.component';
import { GameUpdateComponent } from 'src/app/modules/admin/AdminUpdates/game-update/game-update.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public themesUpdateDialog: MatDialog, public productionCoUpdateDialog: MatDialog,
     public vendorsUpdateDialog: MatDialog, public gamesUpdateDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onThemesUpdate()
  {
    const themesDialogRef= this.themesUpdateDialog.open(ThemeUpdateComponent, {
      width: '500px'});

    themesDialogRef.afterClosed().subscribe(result => {
    console.log('themesUpdateDialog was closed');
    })
  }

  onProductionCompaniesUpdate()
  {
    const prodCoDialogRef = this.productionCoUpdateDialog.open(ProductionCompaniesUpdateComponent, {
      width: '500px'});

    prodCoDialogRef.afterClosed().subscribe(result => {
      console.log('productionCoUpdateDialog was closed');
    })
  }

  onVendorsUpdate()
  {
    const vendorsDialogRef= this.vendorsUpdateDialog.open(VendorsUpdateComponent, {
      width: '500px'});

    vendorsDialogRef.afterClosed().subscribe(result => {
      console.log('vendorsUpdateDialog was closed');
    })
    
  }

  onGamesUpdate()
  {
    const gamesDialogRef= this.gamesUpdateDialog.open(GameUpdateComponent, {
      width: '500px'});

    gamesDialogRef.afterClosed().subscribe(result => {
      console.log('gamesUpdateDialog was closed');
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { ThemeUpdateNavigationComponent } from 'src/app/modules/admin/AdminUpdates/theme-update-navigation/theme-update-navigation.component';
import { DevelopersUpdateNavigationComponent } from 'src/app/modules/admin/AdminUpdates/developers-update-navigation/developers-update-navigation.component';
import { VendorsUpdateNavigationComponent } from 'src/app/modules/admin/AdminUpdates/vendors-update-navigation/vendors-update-navigation.component';
import { GameUpdateNavigationComponent } from 'src/app/modules/admin/AdminUpdates/game-update-navigation/game-update-navigation.component';


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
    const themesDialogRef= this.themesUpdateDialog.open(ThemeUpdateNavigationComponent, {
      width: '500px'});

    themesDialogRef.afterClosed().subscribe(result => {
    console.log('themesUpdateDialog was closed');
    })
  }

  onProductionCompaniesUpdate()
  {
    const prodCoDialogRef = this.productionCoUpdateDialog.open(DevelopersUpdateNavigationComponent, {
      width: '500px'});

    prodCoDialogRef.afterClosed().subscribe(result => {
      console.log('productionCoUpdateDialog was closed');
    })
  }

  onVendorsUpdate()
  {
    const vendorsDialogRef= this.vendorsUpdateDialog.open(VendorsUpdateNavigationComponent, {
      width: '500px'});

    vendorsDialogRef.afterClosed().subscribe(result => {
      console.log('vendorsUpdateDialog was closed');
    })
    
  }

  onGamesUpdate()
  {
    const gamesDialogRef= this.gamesUpdateDialog.open(GameUpdateNavigationComponent, {
      width: '500px'});

    gamesDialogRef.afterClosed().subscribe(result => {
      console.log('gamesUpdateDialog was closed');
    })
  }

}

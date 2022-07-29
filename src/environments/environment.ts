// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let url = "http://localhost:3000/";

export const environment = {
  production: false,
  hotel_list_3_calusel1_get_url: url + 'slide_1',
  hotel_list_3_calusel2_get_url: url + 'slide_2',
  headerAddress: url + 'header_addres',
  headerLogo:url + "header_logo",
  headerManu:url +'header_manue',
  hotelList:url + 'hotel_list',
  hotelList2:url + "hotel_list_2",
  roomHotel:url + "rooms_hotel_block",
  serviceHotel:url + 'service_hotel',
  footerList1:url + "footer_list_1",
  footerList2:url + "footer_list_2",
  footerLogo:url + "footer_logo",
  footerAddress: url + 'footer_addres',
  londonHotelRoom: url + "london_hotel_room",
  londonHotelTitle: url + "london_hotel_title",
  londonHotelPrice: url + "london_hotel_price",
  londonRoomAmet: url + "london_room_amet",
  hotel_list_3_calusel3_get_url: url + 'slide_3',
  homePageMap:url + "home_page_map",
  mapMarker: url + 'map_markers'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

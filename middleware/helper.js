export default function({ route, redirect, app, store }){
	store.dispatch( "closeLeftSidebar" );
}
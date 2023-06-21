import React from "react";
import SideBarExploreItem from "./SideBarExploreItem";

const SidebarExploreSection = () => {
  return (
    <div className="explore border-t border-gray-200/10 pt-6 my-5 flex flex-col">
      <h2 className="text-lg pl-2 mb-2">Explore</h2>
      <div className="flex flex-col gap-3 mt-2">
        <SideBarExploreItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 17l6 -6l4 4l8 -8"></path>
            <path d="M14 7l7 0l0 7"></path>
         </svg>
          }
          title="Trending"
        />
        <SideBarExploreItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-tennis" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M6 5.3a9 9 0 0 1 0 13.4"></path>
            <path d="M18 5.3a9 9 0 0 0 0 13.4"></path>
         </svg>
          }
          title="Sports"
        />
        <SideBarExploreItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-music" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M9 17l0 -13l10 0l0 13"></path>
            <path d="M9 8l10 0"></path>
         </svg>
          }
          title="Music"
        />
        <SideBarExploreItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-movie" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 4l0 16"></path>
            <path d="M16 4l0 16"></path>
            <path d="M4 8l4 0"></path>
            <path d="M4 16l4 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M16 8l4 0"></path>
            <path d="M16 16l4 0"></path>
         </svg>
          }
          title="Movies"
        />
        <SideBarExploreItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
            <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
            <path d="M8 9v2"></path>
            <path d="M7 10h2"></path>
            <path d="M14 10h2"></path>
         </svg>
          }
          title="Gaming"
        />
        <SideBarExploreItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-tidal"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5.333 6l3.334 3.25l3.333 -3.25l3.333 3.25l3.334 -3.25l3.333 3.25l-3.333 3.25l-3.334 -3.25l-3.333 3.25l3.333 3.25l-3.333 3.25l-3.333 -3.25l3.333 -3.25l-3.333 -3.25l-3.334 3.25l-3.333 -3.25z"></path>
            </svg>
          }
          title="Live"
        />
        <SideBarExploreItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-news"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
              <path d="M8 8l4 0"></path>
              <path d="M8 12l4 0"></path>
              <path d="M8 16l4 0"></path>
            </svg>
          }
          title="News"
        />
        <SideBarExploreItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-books"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
              <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
              <path d="M5 8h4"></path>
              <path d="M9 16h4"></path>
              <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
              <path d="M14 9l4 -1"></path>
              <path d="M16 16l3.923 -.98"></path>
            </svg>
          }
          title="Learning"
        />
        <SideBarExploreItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-shopping-cart"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          }
          title="Shopping"
        />
        <SideBarExploreItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-hanger"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path>
            </svg>
          }
          title="Fashion"
        />
      </div>
    </div>
  );
};

export default SidebarExploreSection;

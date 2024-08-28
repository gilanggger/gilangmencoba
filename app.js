Vue.component('sidebar-component', {
  template: `
    <div class="sidebar">
      <div class="search-box">
        <input type="text" v-model="searchInput" placeholder="Search..." @input="filterLinks">
      </div>
      <a v-if="filteredLinks.includes('Home')" href="#" @click.prevent="navigateTo('home.html')">Home</a>
      <div v-if="isSubmenuVisible && filteredLinks.includes('Home')" class="submenu">
        <a href="#" @click.prevent="navigateTo('analytics.html')">Analytics</a>
        <a href="#" @click.prevent="navigateTo('cpm.html')">CPM</a>
      </div>
      <a href="#" @click.prevent="navigateTo('services.html')" v-if="filteredLinks.includes('Services')">Services</a>
      <a href="#" @click.prevent="navigateTo('clients.html')" v-if="filteredLinks.includes('Clients')">Clients</a>
      <a href="#" @click.prevent="navigateTo('contact.html')" v-if="filteredLinks.includes('Contact')">Contact</a>
    </div>
  `,
  data() {
    return {
      searchInput: '',
      isSubmenuVisible: false,
      links: ['Home', 'Services', 'Clients', 'Contact'],
      filteredLinks: ['Home', 'Services', 'Clients', 'Contact'],
    };
  },
  methods: {
    navigateTo(page) {
      window.location.href = page;
    },
    filterLinks() {
      const filter = this.searchInput.toUpperCase();
      this.filteredLinks = this.links.filter(link => link.toUpperCase().includes(filter));
      if (!this.filteredLinks.includes('Home') && this.isSubmenuVisible) {
        this.isSubmenuVisible = false;
      }
    }
  }
});

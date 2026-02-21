<script lang="ts">
  import { navigate } from 'astro:transitions/client';
  
  export let currentTag: string = '';
  export let availableTags: string[] = [];
  
  function handleTagChange(tag: string) {
    if (tag === currentTag) {
      // If clicking the same tag, remove the filter
      navigate('/blogs');
    } else {
      // Navigate to new tag filter
      navigate(`/blogs?tags=${encodeURIComponent(tag)}`);
    }
  }
</script>

<div class="filter-container" style="background-color: var(--color-secondary); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 2rem;">
  <h2 class="text-xl font-semibold mb-4" style="color: var(--color-title);">Filter by Category</h2>
  
  <div class="tags-grid flex flex-wrap gap-2">
    <!-- All posts button -->
    <button
      class="tag-button px-4 py-2 rounded-md text-sm font-medium transition-all"
      style="
        background-color: {!currentTag ? 'var(--color-text-active)' : 'var(--color-separator)'};
        color: {!currentTag ? 'var(--color-primary)' : 'var(--color-regular-text)'};
        border: none;
        cursor: pointer;
      "
      on:click={() => handleTagChange('')}
    >
      All Posts
    </button>
    
    <!-- Individual tag buttons -->
    {#each availableTags as tag}
      <button
        class="tag-button px-4 py-2 rounded-md text-sm font-medium transition-all"
        style="
          background-color: {currentTag === tag ? 'var(--color-text-active)' : 'var(--color-separator)'};
          color: {currentTag === tag ? 'var(--color-primary)' : 'var(--color-regular-text)'};
          border: none;
          cursor: pointer;
        "
        on:click={() => handleTagChange(tag)}
      >
        {tag}
      </button>
    {/each}
  </div>
  
  <!-- Current filter info -->
  {#if currentTag}
    <div class="mt-4 text-sm" style="color: var(--color-secondary-text);">
      Filtering by: <strong style="color: var(--color-subtitle);">{currentTag}</strong>
    </div>
  {/if}
</div>

<style>
  .tag-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .tags-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>

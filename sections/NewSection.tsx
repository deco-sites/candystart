import { GitHubRepoSummary } from "../loaders/GithubLoader.ts";

interface Props {
  /**
   * @description The repo summary data.
   */
  summary?: GitHubRepoSummary;
  /**
   * @description The title text.
   */
  title?: string;
  /**
   * @description The description text.
   */
  description?: string;
  /**
   * @description The language chip text.
   */
  languageChip?: string;
  /**
   * @description The star count text.
   */
  starCountText?: string;
  /**
   * @description The fork count text.
   */
  forkCountText?: string;
  /**
   * @description The watcher count text.
   */
  watcherCountText?: string;
  /**
   * @description The issue count text.
   */
  issueCountText?: string;
}
// helo
export default function Section({ 
  summary,
  title = "Repo Title",
  description = "Repo description goes here",
  languageChip = "Language",
  starCountText = "star",
  forkCountText = "fork",  
  watcherCountText = "watching",
  issueCountText = "issue"
}: Props) {
  return (
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-2">
        <a href={summary?.html_url} class="text-blue-600 hover:underline" target="_blank">{summary?.full_name ?? title}</a>
      </h2>
      <p class="text-gray-600 mb-4">{summary?.description ?? description}</p>
      <div class="flex items-center mb-4">
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">{summary?.language ?? languageChip}</span>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="flex items-center">
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span class="ml-1">{summary?.stargazers_count ?? 0} {starCountText}</span>
        </div>
        <div class="flex items-center">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fork</title><path d="M5.5 3.5a2 2 0 100 4h9a2 2 0 100-4h-9zM5.5 7.5a2 2 0 100 4h9a2 2 0 100-4h-9z"></path><path fill-rule="evenodd" d="M3.5 10.5A2 2 0 015.5 8h9a2 2 0 012 2v5a2 2 0 01-2 2h-9a2 2 0 01-2-2v-5z" clip-rule="evenodd"></path></svg>
          <span class="ml-1">{summary?.forks_count ?? 0} {forkCountText}</span>
        </div>
        <div class="flex items-center">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Watchers</title><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
          <span class="ml-1">{summary?.watchers_count ?? 0} {watcherCountText}</span>
        </div>
        <div class="flex items-center">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Issues</title><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
          <span class="ml-1">{summary?.open_issues_count ?? 0} {issueCountText}</span>
        </div>
      </div>
    </div>
  );
}
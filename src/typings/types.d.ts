/* tslint:disable */

/* Long type */
export type Long = any;
/* Enum for IssueState */
export type IssueState = "open" | "closed";

/* Ordering Enum for Issue */
export type _IssueOrdering = "id_asc" | "id_desc" | "number_asc" | "number_desc" | "name_asc" | "name_desc" | "title_asc" | "title_desc" | "body_asc" | "body_desc" | "state_asc" | "state_desc" | "timestamp_asc" | "timestamp_desc" | "action_asc" | "action_desc" | "createdAt_asc" | "createdAt_desc" | "updatedAt_asc" | "updatedAt_desc" | "closedAt_asc" | "closedAt_desc";

/* Ordering Enum for Repo */
export type _RepoOrdering = "id_asc" | "id_desc" | "owner_asc" | "owner_desc" | "name_asc" | "name_desc" | "allowRebaseMerge_asc" | "allowRebaseMerge_desc" | "allowSquashMerge_asc" | "allowSquashMerge_desc" | "allowMergeCommit_asc" | "allowMergeCommit_desc" | "defaultBranch_asc" | "defaultBranch_desc";

/* Ordering Enum for Label */
export type _LabelOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "default_asc" | "default_desc" | "color_asc" | "color_desc";

/* Ordering Enum for ChatChannel */
export type _ChatChannelOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "provider_asc" | "provider_desc" | "normalizedName_asc" | "normalizedName_desc" | "isDefault_asc" | "isDefault_desc" | "botInvitedSelf_asc" | "botInvitedSelf_desc";

/* Ordering Enum for ChatId */
export type _ChatIdOrdering = "id_asc" | "id_desc" | "screenName_asc" | "screenName_desc" | "provider_asc" | "provider_desc" | "isAtomistBot_asc" | "isAtomistBot_desc" | "isOwner_asc" | "isOwner_desc" | "isPrimaryOwner_asc" | "isPrimaryOwner_desc" | "isAdmin_asc" | "isAdmin_desc" | "isBot_asc" | "isBot_desc" | "timezoneLabel_asc" | "timezoneLabel_desc";

/* Ordering Enum for Email */
export type _EmailOrdering = "address_asc" | "address_desc";

/* Ordering Enum for GitHubId */
export type _GitHubIdOrdering = "login_asc" | "login_desc" | "name_asc" | "name_desc";

/* Ordering Enum for GitHubProvider */
export type _GitHubProviderOrdering = "id_asc" | "id_desc" | "url_asc" | "url_desc" | "apiUrl_asc" | "apiUrl_desc" | "gitUrl_asc" | "gitUrl_desc";

/* Ordering Enum for Person */
export type _PersonOrdering = "id_asc" | "id_desc" | "forename_asc" | "forename_desc" | "surname_asc" | "surname_desc";

/* Ordering Enum for ChatTeam */
export type _ChatTeamOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "provider_asc" | "provider_desc" | "domain_asc" | "domain_desc" | "messageCount_asc" | "messageCount_desc" | "emailDomain_asc" | "emailDomain_desc";

/* Ordering Enum for Org */
export type _OrgOrdering = "id_asc" | "id_desc" | "owner_asc" | "owner_desc";

/* Ordering Enum for GitHubOrgWebhook */
export type _GitHubOrgWebhookOrdering = "id_asc" | "id_desc" | "url_asc" | "url_desc";

/* Ordering Enum for UserPreferences */
export type _UserPreferencesOrdering = "id_asc" | "id_desc" | "updatedAt_asc" | "updatedAt_desc";

/* Ordering Enum for ChannelLink */
export type _ChannelLinkOrdering = "id_asc" | "id_desc";

/* Ordering Enum for PullRequest */
export type _PullRequestOrdering = "id_asc" | "id_desc" | "number_asc" | "number_desc" | "name_asc" | "name_desc" | "body_asc" | "body_desc" | "state_asc" | "state_desc" | "merged_asc" | "merged_desc" | "timestamp_asc" | "timestamp_desc" | "baseBranchName_asc" | "baseBranchName_desc" | "branchName_asc" | "branchName_desc" | "title_asc" | "title_desc" | "createdAt_asc" | "createdAt_desc" | "updatedAt_asc" | "updatedAt_desc" | "closedAt_asc" | "closedAt_desc" | "mergedAt_asc" | "mergedAt_desc";

/* Ordering Enum for Commit */
export type _CommitOrdering = "sha_asc" | "sha_desc" | "message_asc" | "message_desc" | "timestamp_asc" | "timestamp_desc";

/* Enum for BuildStatus */
export type BuildStatus = "passed" | "broken" | "failed" | "started" | "canceled";

/* Enum for BuildTrigger */
export type BuildTrigger = "pull_request" | "push";

/* Ordering Enum for Build */
export type _BuildOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "status_asc" | "status_desc" | "buildUrl_asc" | "buildUrl_desc" | "compareUrl_asc" | "compareUrl_desc" | "trigger_asc" | "trigger_desc" | "provider_asc" | "provider_desc" | "pullRequestNumber_asc" | "pullRequestNumber_desc" | "startedAt_asc" | "startedAt_desc" | "finishedAt_asc" | "finishedAt_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for Push */
export type _PushOrdering = "id_asc" | "id_desc" | "timestamp_asc" | "timestamp_desc" | "branch_asc" | "branch_desc";

/* Ordering Enum for SpinnakerPipeline */
export type _SpinnakerPipelineOrdering = "executionId_asc" | "executionId_desc" | "application_asc" | "application_desc" | "eventType_asc" | "eventType_desc" | "taskName_asc" | "taskName_desc" | "stageName_asc" | "stageName_desc" | "stageType_asc" | "stageType_desc" | "waitingForJudgement_asc" | "waitingForJudgement_desc";

/* Ordering Enum for SpinnakerStage */
export type _SpinnakerStageOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "type_asc" | "type_desc" | "status_asc" | "status_desc" | "startTime_asc" | "startTime_desc" | "endTime_asc" | "endTime_desc" | "refId_asc" | "refId_desc";

/* Ordering Enum for Tag */
export type _TagOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "description_asc" | "description_desc" | "ref_asc" | "ref_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for Release */
export type _ReleaseOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for DockerImage */
export type _DockerImageOrdering = "image_asc" | "image_desc";

/* Ordering Enum for K8Spec */
export type _K8SpecOrdering = "name_asc" | "name_desc" | "kind_asc" | "kind_desc" | "curHash_asc" | "curHash_desc" | "fsha_asc" | "fsha_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for K8Pod */
export type _K8PodOrdering = "name_asc" | "name_desc" | "state_asc" | "state_desc" | "host_asc" | "host_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for Environment */
export type _EnvironmentOrdering = "name_asc" | "name_desc" | "vpcName_asc" | "vpcName_desc";

/* Enum for StatusState */
export type StatusState = "pending" | "success" | "error" | "failure";

/* Ordering Enum for Status */
export type _StatusOrdering = "id_asc" | "id_desc" | "state_asc" | "state_desc" | "description_asc" | "description_desc" | "targetUrl_asc" | "targetUrl_desc" | "context_asc" | "context_desc";

/* Ordering Enum for HerokuApp */
export type _HerokuAppOrdering = "app_asc" | "app_desc" | "url_asc" | "url_desc" | "timestamp_asc" | "timestamp_desc" | "user_asc" | "user_desc" | "appId_asc" | "appId_desc" | "release_asc" | "release_desc";

/* Ordering Enum for Application */
export type _ApplicationOrdering = "id_asc" | "id_desc" | "state_asc" | "state_desc" | "host_asc" | "host_desc" | "timestamp_asc" | "timestamp_desc" | "domain_asc" | "domain_desc" | "data_asc" | "data_desc";

/* Ordering Enum for Fingerprint */
export type _FingerprintOrdering = "name_asc" | "name_desc" | "sha_asc" | "sha_desc" | "data_asc" | "data_desc";

/* Ordering Enum for ParentImpact */
export type _ParentImpactOrdering = "id_asc" | "id_desc" | "url_asc" | "url_desc" | "data_asc" | "data_desc";

/* Ordering Enum for Branch */
export type _BranchOrdering = "id_asc" | "id_desc" | "name_asc" | "name_desc" | "deleted_asc" | "deleted_desc" | "timestamp_asc" | "timestamp_desc";

/* Enum for ReviewState */
export type ReviewState = "requested" | "pending" | "approved" | "commented" | "changes_requested";

/* Ordering Enum for Review */
export type _ReviewOrdering = "id_asc" | "id_desc" | "gitHubId_asc" | "gitHubId_desc" | "body_asc" | "body_desc" | "state_asc" | "state_desc" | "submittedAt_asc" | "submittedAt_desc" | "htmlUrl_asc" | "htmlUrl_desc";

/* Enum for CommentCommentType */
export type CommentCommentType = "review" | "pullRequest" | "issue";

/* Ordering Enum for Comment */
export type _CommentOrdering = "id_asc" | "id_desc" | "body_asc" | "body_desc" | "timestamp_asc" | "timestamp_desc" | "gitHubId_asc" | "gitHubId_desc" | "path_asc" | "path_desc" | "position_asc" | "position_desc" | "htmlUrl_asc" | "htmlUrl_desc" | "commentType_asc" | "commentType_desc";

/* Ordering Enum for K8Cluster */
export type _K8ClusterOrdering = "name_asc" | "name_desc" | "availabilityZone_asc" | "availabilityZone_desc";

/* Ordering Enum for PushImpact */
export type _PushImpactOrdering = "id_asc" | "id_desc" | "url_asc" | "url_desc" | "data_asc" | "data_desc";

/* Ordering Enum for PullRequestImpact */
export type _PullRequestImpactOrdering = "id_asc" | "id_desc" | "url_asc" | "url_desc" | "data_asc" | "data_desc";

/* Ordering Enum for UserJoinedChannel */
export type _UserJoinedChannelOrdering = "id_asc" | "id_desc";

export namespace PushToTsLinting {
  export type Variables = {
  }

  export type Subscription = {
    Push?: Push[]; 
  } 

  export type Push = {
    after?: After; 
    branch?: string; 
    repo?: Repo; 
  } 

  export type After = {
    sha?: string; 
    message?: string; 
    author?: Author; 
  } 

  export type Author = {
    person?: Person; 
  } 

  export type Person = {
    chatId?: ChatId; 
  } 

  export type ChatId = {
    screenName?: string; 
  } 

  export type Repo = {
    name?: string; 
    owner?: string; 
  } 
}
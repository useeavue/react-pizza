import { Subject } from 'rxjs';

export class SearchService {
	public searchString$ = new Subject<string>();
}

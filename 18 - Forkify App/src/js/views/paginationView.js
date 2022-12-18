import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateNextButton(page) {
    return `
    <button class="btn--inline pagination__btn--next" data-goto="${page}">
      <span>Page ${page}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }

  _generatePrevButton(page) {
    return `
    <button class="btn--inline pagination__btn--prev" data-goto="${page}">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${page}</span>
    </button>
    `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    console.log(this._data);

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page1, there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <div class="hidden">${this._generateNextButton(curPage + 1)}</div>
      <span class="total-pages"> ${numPages} Pages</span>
      ${this._generateNextButton(curPage + 1)}
      `;
    }

    // LAST PAGE.
    if (curPage === numPages && numPages > 1) {
      return `
      ${this._generatePrevButton(curPage - 1)}
      <span class="total-pages">Last Page</span>
      <div class="hidden">${this._generatePrevButton(curPage + 1)}</div>
      `;
    }

    // OTHER PAGE.
    if (curPage < numPages) {
      return `
      ${this._generatePrevButton(curPage - 1)}
      <span class="total-pages"> ${numPages} Pages</span>
      ${this._generateNextButton(curPage + 1)}
      `;
    }

    // Page1, there are NO other pages
    return '';
  }
}

export default new PaginationView();

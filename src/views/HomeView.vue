<script setup>
import { onMounted, watch } from 'vue'
import { useLoadingStore } from '../stores/loading';
const loadingStore = useLoadingStore();

const resizeNavbar = () => {
  let framework7App = window.framework7App;
  framework7App.navbar.size('.navbar');
}

onMounted(() => {
  if (loadingStore.isLoaded) {
    resizeNavbar();
  } else {
    watch(() => loadingStore.isLoaded, async () => {
      if (loadingStore.isLoaded) {
        resizeNavbar();
      }
    })
  }
})

</script>

<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="title">List View</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block">
        <p>Framework7 allows you to be flexible with list views (table views). You can make them as navigation menus,
          you
          can use there icons, inputs, and any elements inside of the list, and even make them nested:</p>
      </div>
      <div class="block-title">Simple List</div>
      <div class="list list-dividers-ios simple-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div class="block-title">Strong List</div>
      <div class="list list-strong list-dividers-ios simple-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div class="block-title">Strong Outline List</div>
      <div class="list list-strong list-outline list-dividers-ios simple-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div class="block-title">Strong Inset List</div>
      <div class="list list-strong inset list-dividers-ios simple-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div class="block-title">Strong Outline Inset List</div>
      <div class="list list-strong list-outline inset list-dividers-ios simple-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div class="block-title">Simple Links List</div>
      <div class="list links-list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div class="block-title">Data list, with icons</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Ivan Petrov</div>
                <div class="item-after">CEO</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">John Doe</div>
                <div class="item-after"> <span class="badge">5</span></div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Jenna Smith</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block-title">Links</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Ivan Petrov</div>
                <div class="item-after">CEO</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">John Doe</div>
                <div class="item-after">Cleaner</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Jenna Smith</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="block-title">Links, Header, Footer</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Name</div>
                  John Doe
                </div>
                <div class="item-after">Edit</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Phone</div>
                  +7 90 111-22-3344
                </div>
                <div class="item-after">Edit</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Email</div>
                  john@doe
                  <div class="item-footer">Home</div>
                </div>
                <div class="item-after">Edit</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Email</div>
                  john@framework7
                  <div class="item-footer">Work</div>
                </div>
                <div class="item-after">Edit</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="block-title">Links, no icons</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title">Ivan Petrov</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title">John Doe</div>
              </div>
            </a>
          </li>
          <li class="list-group-title">Group Title Here</li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title">Ivan Petrov</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title">Jenna Smith</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="block-title">Grouped with sticky titles</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios">
        <div class="list-group">
          <ul>
            <li class="list-group-title">A</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Aaron </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Abbie</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Adam</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-group">
          <ul>
            <li class="list-group-title">B</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Bailey</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Barclay</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Bartolo</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-group">
          <ul>
            <li class="list-group-title">C</li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Caiden</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Calvin</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Candy</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="block-title">Mixed and nested</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Ivan Petrov</div>
                <div class="item-after">CEO</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Two icons here</div>
              </div>
            </a>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">No icons here</div>
              </div>
            </div>
            <ul>
              <li>
                <a class="item-link item-content">
                  <div class="item-media"><i class="icon icon-f7"></i></div>
                  <div class="item-inner">
                    <div class="item-title">Ivan Petrov</div>
                    <div class="item-after">CEO</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="item-link item-content">
                  <div class="item-media"><i class="icon icon-f7"></i><i class="icon icon-f7"></i></div>
                  <div class="item-inner">
                    <div class="item-title">Two icons here</div>
                  </div>
                </a>
              </li>
              <li>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title">No icons here</div>
                  </div>
                </div>
              </li>
              <li>
                <a class="item-link item-content">
                  <div class="item-media"><i class="icon icon-f7"></i></div>
                  <div class="item-inner">
                    <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                  </div>
                </a>
              </li>
              <li>
                <div class="item-content">
                  <div class="item-media"><i class="icon icon-f7"></i></div>
                  <div class="item-inner">
                    <div class="item-title">With toggle</div>
                    <div class="item-after">
                      <label class="toggle toggle-init">
                        <input type="checkbox">
                        <span class="toggle-icon"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Ultra long text goes here, no, it is really really long</div>
              </div>
            </a>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">With toggle</div>
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="checkbox" />
                    <span class="toggle-icon"></span>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">Tablet inset</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios medium-inset">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Ivan Petrov</div>
                <div class="item-after">CEO</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Two icons here</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title">Ultra long text goes here, no, it is really really long</div>
              </div>
            </a>
          </li>
        </ul>
        <div class="block-footer">
          <p>This list block will look like "inset" only on tablets (iPad)</p>
        </div>
      </div>

      <div class="block-title">Media Lists</div>
      <div class="block">
        <p>Media Lists are almost the same as Data Lists, but with a more flexible layout for visualization of more
          complex data, like products, services, users, etc.</p>
      </div>
      <div class="block-title">Songs</div>
      <div class="list media-list  list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <a class="item-link">
              <div class="item-content">
                <div class="item-media"><img style="border-radius: 8px"
                    src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="70" />
                </div>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">Yellow Submarine</div>
                    <div class="item-after">$15</div>
                  </div>
                  <div class="item-subtitle">Beatles</div>
                  <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus
                    ut
                    turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                    amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat.
                    In
                    vel dui laoreet, commodo augue id, pulvinar lacus.</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><img style="border-radius: 8px"
                  src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="70" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Don't Stop Me Now</div>
                  <div class="item-after">$22</div>
                </div>
                <div class="item-subtitle">Queen</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-media"><img style="border-radius: 8px"
                  src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg" width="70" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Billie Jean</div>
                  <div class="item-after">$16</div>
                </div>
                <div class="item-subtitle">Michael Jackson</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="block-title">Mail App</div>
      <div class="list media-list list-outline-ios list-strong-ios list-dividers-ios">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Facebook</div>
                  <div class="item-after">17:14</div>
                </div>
                <div class="item-subtitle">New messages from John Doe</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">John Doe (via Twitter)</div>
                  <div class="item-after">17:11</div>
                </div>
                <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Facebook</div>
                  <div class="item-after">16:48</div>
                </div>
                <div class="item-subtitle">New messages from John Doe</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">John Doe (via Twitter)</div>
                  <div class="item-after">15:32</div>
                </div>
                <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="block-title">With centered chevron icon</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios media-list chevron-center">
        <ul>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Facebook</div>
                  <div class="item-after">17:14</div>
                </div>
                <div class="item-subtitle">New messages from John Doe</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">John Doe (via Twitter)</div>
                  <div class="item-after">17:11</div>
                </div>
                <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                  vel dui laoreet, commodo augue id, pulvinar lacus.</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="block-title">Something more simple</div>
      <div class="list list-outline-ios list-strong-ios list-dividers-ios media-list">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"><img style="border-radius: 8px"
                  src="https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg" width="40" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Yellow Submarine</div>
                </div>
                <div class="item-subtitle">Beatles</div>
              </div>
            </div>
          </li>
          <li><a class="item-link item-content">
              <div class="item-media"><img style="border-radius: 8px"
                  src="https://cdn.framework7.io/placeholder/fashion-88x88-2.jpg" width="40" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Don't Stop Me Now</div>
                </div>
                <div class="item-subtitle">Queen</div>
              </div>
            </a>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><img style="border-radius: 8px"
                  src="https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg" width="40" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Billie Jean</div>
                </div>
                <div class="item-subtitle">Michael Jackson</div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
